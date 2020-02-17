const Order = use('App/Models/Order')
const Database = use('Database')

const pusher = use('App/Services/Pusher')

class OrderService {

    static async getReport() {
        return this.find()
    }

    static async setOpened(id, is_opened = true) {
        const updated = await Order
                                .query()
                                .where('orders.id', id)
                                .update({ is_opened  })

        pusher.trigger('monka', `adminNoticationsUpdate`, {})

        return updated
    }

    static find() {
        const query = Order
            .query()
            .with('user')
            .with('state')
            .with('address', (builder) => {
                builder.with('neighborhood').with('city.state')
            })            
            .with('cart', (builder) => {
                builder
                    .withCount('products')
                    .with('voucher')
                    .with('products', (builder) => {
                        builder
                            .with('option')
                            .with('product')
                            .with('options', (builder) => {
                                builder 
                                    .with('option')
                                    .with('group')
                            })
                            .select('cart_products.*')
                    })
            })
            .select('orders.*')

        return query
    }

    static getTotalPrice(orders) {
        if (orders.id) {
            return this.getTotalPriceCart(orders)
        }

        return orders.map(order => {
            return this.getTotalPriceCart(order)
        })
    }

    static getTotalPriceCart(order) {
        let totalPrice = 0;

        const products = order.cart.products.map(cartProduct => {
            const groups = [];
            const group_ids = [];
                        
            let totalProductPrice = 0;

            let productPrice = cartProduct.price

            if (cartProduct.option) {
                productPrice = cartProduct.option.price
            }

            if (cartProduct.options) {
                cartProduct.options.map(cartOption => {
                    const totalOptionPrice = cartOption.option.price * cartOption.quantity;
                    totalProductPrice = totalProductPrice += totalOptionPrice;

                    if (!group_ids.includes(cartOption.group.id)) {
                        groups.push(cartOption.group)
                        group_ids.push(cartOption.group.id)
                    }                    
                })
            }

            // Add options related in object group
            const listGroups = groups.map(group => {
                const options = []
                cartProduct.options.map(cartProductOption => {
                    if (cartProductOption.option.product_group_id === group.id) {
                        options.push(cartProductOption)
                    }
                })

                return { ...group, options }
            })

            cartProduct.groups = listGroups
            
            cartProduct.price_unity = productPrice
            cartProduct.total_price = (productPrice + totalProductPrice) * cartProduct.quantity;

            totalPrice = totalPrice += (productPrice += totalProductPrice) * cartProduct.quantity

            return cartProduct
        })

        const totalProducts = totalPrice

        let shipping = order.address.neighborhood.price

        let discount = 0

        if (order.cart.voucher) {
            discount = order.cart.voucher.discount_value

            if (order.cart.voucher.discount_type === "money") {
                totalPrice = totalPrice - order.cart.voucher.discount_value
                // discount = totalProducts - order.cart.voucher.discount_value
            } else {
                totalPrice = totalPrice * order.cart.voucher.discount_value / 100
                // discount = totalProducts * order.cart.voucher.discount_value / 100
            }
        }

        // voucher is free_shipping
        if (order.cart.voucher && order.cart.voucher.free_shipping) {
            shipping = 0
        }

        // apply shipping
        totalPrice = totalPrice + shipping              

        order.cart.products = products
        order.total_products = totalProducts
        order.total_price = totalPrice
        order.discount = discount
        order.shipping = shipping

        return order        
    }

}

module.exports = OrderService