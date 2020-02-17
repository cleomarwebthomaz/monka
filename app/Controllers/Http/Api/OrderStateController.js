'use strict'

const OrderState = use('App/Models/OrderState')

class OrderStateController {

    async index({ response }) {
        const orderStates = await OrderState.all()

        return response.json(orderStates)
    }

}

module.exports = OrderStateController
