'use strict'

const { validate } = use('Validator')

const Database = use('Database')

const pusher = use('App/Services/Pusher')
const Cart = use('App/Models/Cart')
const CartProduct = use('App/Models/CartProduct')
const Order = use('App/Models/Order')
const CreditRule = use('App/Models/CreditRule')
const PaymentMethod = use('App/Models/PaymentMethod')
const Credit = use('App/Services/Credit')
const CreditRuleService = use('App/Services/CreditRule')
const CartService = use('App/Services/Cart')

class CheckoutController {

    async store({ response, request, auth }) {
        try {
            const rules = {
                payment_method_id: 'number|required|exists:payment_methods,id',
                user_address_id: 'number|required|exists:user_addresses,id',
                observation: 'alpha_numeric'
            }

            const validation = await validate(request.all(), rules, {
                'user_address_id.required': 'Campo Obrigatório',
                'payment_method_id.required': 'Campo Obrigatório',
                'observation.alpha_numeric': 'Campo Alfa Numérico'
            })

            if (validation.fails()) {
                return response.json({ success: false, validations: validation.messages() })
            }

            const data = request.only(['products'])

            const cart = await CartService.getCart(auth.user.id)

            const paymentMethod = await PaymentMethod.findOrFail(request.input('payment_method_id'))

            let credit;
            if (paymentMethod.id === 4) {
                // if credit rule is true
                credit = await Credit.addToUser({ user_id: auth.user.id })

                const total_credits = await Credit.getTotalByUser({ user_id: auth.user.id })

                if (total_credits < cart.total_price) {
                    return response.send({ success: false, message: 'Créditos insuficientes' })
                }
            }

            const order = await Order.create({
                cart_id: cart.id,
                user_id: auth.user.id,
                order_state_id: 1,
                payment_method_id: paymentMethod.id,
                user_address_id: request.input('user_address_id'),
                observation: request.input('observation')
            })

            // Apply subtract value used
            if (paymentMethod.id === 4) {
                await Credit.subtractCredit({ user_id: auth.user.id, order_id: order.id, value: cart.total_price })
            }

            await Cart.query().where('id', cart.id).update({ status: 'finalized' })

            pusher.trigger('monka', `newOrder`, {})

            order.credit = credit

            return response.json(order)
        } catch (error) {
            return response.json(error.message)
        }
    }

}

module.exports = CheckoutController
