const Database = use('Database')

const Order = use('App/Models/Order')
const Credit = use('App/Models/Credit')
const CreditUsed = use('App/Models/CreditUsed')

const CreditRuleService = use('App/Services/CreditRule')

class CreditService {

    static async subtractCredit({ user_id, order_id, value }) {
        return await CreditUsed.create({
            user_id, 
            order_id, 
            value
        })
    }

    static async getTotalUsedByUser({ user_id }) {
        const total = await CreditUsed
                                .query()
                                .where('user_id', user_id)
                                .getSum('value')

        return total
    }

    static async getTotalByUser({ user_id }) {
        const query = Credit.query().where('user_id', user_id).orderBy('credits.id', 'DESC')
        const total_value = await query.getSum('value')
        return total_value
    }

    static async getByUser({ user_id }) {
        const query = Credit.query().where('user_id', user_id).orderBy('credits.id', 'DESC')

        const credits = await query.fetch()

        let total_value = await this.getTotalByUser({ user_id })
        const total_credit_useds = await this.getTotalUsedByUser({ user_id })

        total_value = total_value - total_credit_useds

        if (total_value <= 0) total_value = 0

        return {
            total_credit_useds: total_credit_useds || 0,
            total_value: total_value || 0,
            credits
        }
    }

    static async addToUser({ user_id }) {
        const currentPromotion = await CreditRuleService.getCurrent()

        if (!currentPromotion) return false

        const total_orders = await Order.query().where('user_id', user_id).getCount()

        if (total_orders !== currentPromotion.total_orders) {
            return false
        }

        const orders = await Order
                                .query()
                                .where('user_id', user_id)
                                .orderBy('orders.id', 'DESC')
                                .limit(currentPromotion.total_orders)
                                .with('cart.products.product')
                                .where('created_at', '>=', new Date(currentPromotion.date_start))
                                .where('created_at', '<=', new Date(currentPromotion.date_end))
                                .fetch()

        if (orders.length <= 0) return false

        const ordersJSON = orders.toJSON()

        let total_price = 0
        let order_ids = []

        ordersJSON.map(order => {
            order_ids.push(order.id)
            
            order.cart.products.map(cartProduct => {
                const price = cartProduct.product.price / orders.length
                total_price = total_price += price
            })
        })

        let data = {
            user_id,
            credit_rule_id: currentPromotion.id,
            value: total_price,
            order_ids: JSON.stringify(order_ids)
        }

        const credit = await Credit.findOrCreate(data)

        return credit
    }
}

module.exports = CreditService