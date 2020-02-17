const Cart = use('App/Models/Cart')
const UserAddress = use('App/Models/UserAddress')

class CartService {

    static async getCart(user_id) {
        const userAddress = await UserAddress
                                        .query()
                                        .where({
                                            user_id: user_id,
                                            is_default: true
                                        })
                                        .with('neighborhood')
                                        .first()

        const cartUser = await Cart.findOrCreate({
            user_id,
            status: 'active'
        })

        const query = await Cart
                    .query()
                    .where('carts.id', cartUser.id)
                    .withCount('products')
                    .with('voucher')
                    .with('products', (builder) => {
                        builder
                            .orderBy('cart_products.id', 'desc')
                            .with('option')
                            .with('product', (builder) => {
                                builder
                                    .with('images', (builder) => {
                                        builder
                                            .orderBy('id', 'desc')
                                    })
                            })
                            .with('options', (builder) => {
                                builder 
                                    .with('option')
                                    .with('group')
                            })
                            .select('cart_products.*')
                    })
                    .select('carts.*')
                    .first()

        const cart = query.toJSON()
        
        let totalPrice = 0;

        const products = cart.products.map(cartProduct => {
            const groups = [];
            const group_ids = [];
            let totalProductPrice = 0

            let productPrice = cartProduct.price

            if (cartProduct.option && cartProduct.option.id) {
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

        let address = {}
        let shipping = 0;

        if (userAddress && cart.products.length > 0) {
            address = userAddress.toJSON()
            shipping = address.neighborhood.price
        }

        // voucher is free_shipping
        if (cart.voucher && cart.voucher.free_shipping) {
            shipping = 0
        }

        const totalProducts = totalPrice

        let discount = 0

        if (cart.voucher) {
            discount = cart.voucher.discount_value

            if (cart.voucher.discount_type === "money") {
                totalPrice = totalPrice - cart.voucher.discount_value
                // discount = totalProducts - cart.voucher.discount_value
            } else {
                totalPrice = totalPrice * cart.voucher.discount_value / 100
                // discount = totalProducts * cart.voucher.discount_value / 100
            }
        }

        // apply shipping
        totalPrice = totalPrice + shipping

        cart.products = products;
        cart.total_products = totalProducts
        cart.shipping = shipping
        cart.address_shipping = address || null
        cart.total_price = totalPrice
        cart.discount = discount

        return cart
    }

}

module.exports = CartService