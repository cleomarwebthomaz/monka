'use strict'

const CartHook = exports = module.exports = {}

CartHook.method = async (modelInstance) => {
}

CartHook.getTotalPrice = async (cart) => {
    cart.total_price = getPrice(cart.toJSON())
}

CartHook.getAllTotalPrice = async (carts) => {
    carts.map((data, i) => {
        const cart = data.toJSON()
        carts[i].total_price = getPrice(cart)
    })
}

function getPrice(cart) {
    let total_price = 0

    if (!cart.products) return 0
    
    cart.products.map(product => {
        let price = product.product.price

        if (product.option) {
            price = product.option.price
        }

        if (product.options.length) {
            product.options.map(option => {
                price = price + option.option.price * option.quantity
            })
        }

        product.total_price = price * product.quantity

        total_price = total_price + price * product.quantity
    })

    return total_price
}
