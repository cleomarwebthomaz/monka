'use strict'

const CartProductHook = exports = module.exports = {}

CartProductHook.method = async (modelInstance) => {
}

CartProductHook.getTotalPrice = async (cartProduct) => {
    cartProduct.total_price = getPrice(cart.toJSON())
}

CartProductHook.getAllTotalPrice = async (cartProducts) => {
    cartProducts.map((data, i) => {
        const cart = data.toJSON()
        cartProducts[i].total_price = getPrice(cart)
    })
}

function getPrice(cartProduct) {
    let total_price = 0

    
    let price = cartProduct.product.price
    
    if (cartProduct.option) {
        price = cartProduct.option.price
    }

    if (cartProduct.options.length) {
        cartProduct.options.map(cartOption => {
            price = price + cartOption.option.price * cartOption.quantity
        })
    }

        total_price = total_price + price * cartProduct.quantity

        console.log( total_price )

    return total_price
}
