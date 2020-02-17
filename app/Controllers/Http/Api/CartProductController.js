'use strict'

const Cart = use('App/Models/Cart')
const CartProduct = use('App/Models/CartProduct')

class CartProductController {

    async update({ params, response, auth, request }) {
        const cart = await Cart.getUserCart(auth.user.id)

        const cartProduct = await CartProduct
                                        .query()
                                        .where({
                                            id: params.id,
                                            cart_id: cart.id
                                        })
                                        .first()

        let quantity = request.input('quantity')

        if (quantity < 1) {
            quantity = cartProduct.quantity
        }

        cartProduct.quantity = quantity

        await cartProduct.save()

        return response.json(true)
    }

    async destroy({ params, response, auth }) {
        const cart = await Cart.getUserCart(auth.user.id)

        const cartProduct = await CartProduct
                                    .query()
                                    .where({ id: params.id, cart_id: cart.id })
                                    .first()

      const deleted = cartProduct.delete()

      return response.json(true)
    }

}

module.exports = CartProductController
