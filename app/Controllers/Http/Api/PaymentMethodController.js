'use strict'

const PaymentMethod = use('App/Models/PaymentMethod')

class PaymentMethodController {

    async index({ response }) {
        const paymentMethods = await PaymentMethod.all()
        return response.json(paymentMethods)
    }

}

module.exports = PaymentMethodController
