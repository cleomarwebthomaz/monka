'use strict'

var pusher = use('App/Services/Pusher')
const expo = use('App/Services/Expo')

const Order = use('App/Models/Order')
const OrderService = use('App/Services/Order')
const OneSignal = use('App/Services/OneSignal')

class OrderController {

    async count({ response }) {
        const orders = await Order.query().count('* as total').first()
        return response.json(orders)
    }

    async total({ response }) {
        const orders = await OrderService
                                .find()
                                .orderBy('orders.id', 'desc')
                                .limit(10)
                                .where('orders.is_opened', true)
                                .fetch()

        const newOrders = OrderService.getTotalPrice(orders.toJSON())

        let total = 0;

        newOrders.map(order => {
            total = total += order.total_price
        })

        return response.json({ total })
    }

    async index({ response, request }) {
        const limit = request.get().limit || 999;

        const query = OrderService
                                .find()
                                .with('address.neighborhood')
                                .filter(request.all())
                                .orderBy('orders.id', 'desc')
        
        if (request.get().limit) {
            query.limit(request.get().limit)
        }

        const orders = await query.fetch()

        const newOrders = OrderService.getTotalPrice(orders.toJSON())

        return response.json(newOrders)
    }
    
    async show({ response, params }) {
        const order = await OrderService
                                .find()
                                .where('orders.id', params.id)
                                .with('address', (builder) => {
                                    builder
                                        .with('neighborhood')
                                        .with('city.state')
                                })
                                .first()

        if (!order.is_opened) {
            await OrderService.setOpened(order.id, true)
        }

        const newOrder = OrderService.getTotalPrice(order.toJSON())

        return response.json(newOrder)
    }

    async update({ response, params, request }) {
        const order = await Order.findOrFail(params.id)
        const user = await order.user().first()

        order.order_state_id = request.input('order_state_id')

        await order.save()

        const state = await order.state().first()
        state.order_id = order.id
        
        pusher.trigger('monka', `orderStatus-${order.user_id}`, state)

        if (user.push_token) {
            return expo({ 
                to: user.push_token,
                title:  'Status',
                data: { data: state.description }
            });
        }

        return response.json(true)
    }

}

module.exports = OrderController
