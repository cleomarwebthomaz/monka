'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.getTotalPrice = async (order) => {
    order.total_price = getPrice(order.toJSON())
}

OrderHook.getAllTotalPrice = async (orders) => {
    orders.map((data, i) => {
        const order = data.toJSON()
        orders[i].total_price = getPrice(order)
    })
}

function getPrice(order) {
    let total_price = 0

    if (!order.cart || !order.cart.products) return 0

    order.cart.products.map(product => {
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