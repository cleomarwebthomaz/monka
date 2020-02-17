'use strict'

const { validateAll } = use('Validator')

const VoucherService = use('App/Services/Voucher')
const Cart = use('App/Models/Cart')
const CartProduct = use('App/Models/CartProduct')
const CartService = use('App/Services/Cart')

class CartController {

    async index({ auth, response }) {
        const cart = await CartService.getCart(auth.user.id)
        return response.json(cart)
    }

    async store({ request, auth, response }) {
        try {
            const data = request.only(['product_id', 'quantity', 'product_option_id', 'observation'])
            const cartUser = await Cart.getUserCart(auth.user.id)

            data.cart_id = cartUser.id;

            const cartProduct = await CartProduct.create(data)

            await cartProduct.options().createMany(request.input('options'))

            return response.json(true)

        } catch (error) {
           return response.json(error.message)
        }
    }

    async addVoucher({ params, auth, response, request }) {
        const cartUser = await Cart.getUserCart(auth.user.id)

        return await VoucherService.addToCart({
            cart_id: cartUser.id,
            user_id: cartUser.user_id,
            code: request.input('code'),
        })
    }

}

module.exports = CartController
