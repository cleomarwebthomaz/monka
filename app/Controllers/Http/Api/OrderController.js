'use strict'

const OrderService = use('App/Services/Order')
const Order = use('App/Models/Order')
const OrderState = use('App/Models/OrderState')
const Product = use('App/Models/Product')

class OrderController {

    async index({ auth, response }) {
        const orders = await OrderService
                                .find()
                                .where('orders.user_id', auth.user.id)
                                .with('state')
                                .with('paymentMethod')
                                .orderBy('orders.id', 'desc')
                                .fetch()

        const newOrders = OrderService.getTotalPrice(orders.toJSON())

        return response.json(newOrders)
    }

    async show({ auth, params, response }) {
        const order = await OrderService
                                .find()
                                .where({
                                    'orders.id': params.id,
                                    'orders.user_id': auth.user.id
                                })
                                .with('state')
                                .with('paymentMethod')
                                .orderBy('orders.id', 'desc')
                                .first()

        const newOrder = OrderService.getTotalPrice(order.toJSON())

        return response.json(newOrder) 
    }

    async cancel({ request, auth, response, params }) {
        const order = await Order.findOrFail(params.id)
        
        if (order.user_id !== auth.user.id) {
            return response.send(404)
        }
        
        // 5 is canceled
        order.order_state_id = 6

        const updated = await order.save()

        return response.json(updated)
    }

}

module.exports = OrderController
