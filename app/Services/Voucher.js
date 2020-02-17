const { validateAll } = use('Validator')

const moment = require('moment')

const Voucher = use('App/Models/Voucher')
const Cart = use('App/Models/Cart')
const User = use('App/Models/User')

class VoucherService {

    static async addToCart({ code, cart_id, user_id }) {
        const cart = await Cart.find(cart_id)

        const voucher = await Voucher
                                .query()
                                .where('code', code)
                                .where('date_start', '>=', moment().format('YYYY-MM-DD') )
                                .where('date_end', '<=', moment().format('YYYY-MM-DD') )
                                .first()

        if (!voucher) {
            return { success: false, error: 'Cupom inválido' }
        }

        const { limit, limit_by_user } = voucher

        const voucher_used_count = await Cart.query().where('voucher_id', voucher.id).getCount('id')
        const voucher_used_by_user = await Cart.query().where({ voucher_id: voucher.id, user_id }).getCount('id')
        
        if (voucher_used_count === limit || voucher_used_by_user === limit_by_user) {
            return { success: false, error: `Cupom (${voucher.code}) indisponível`}
        }

        // verify limit user
        if (voucher_used_count > limit || voucher_used_by_user > limit_by_user) {
            return { success: false, error: `Cupom (${voucher.code}) indisponível`}
        }

        if (cart.voucher_id === voucher.id) {
            return { success: false, error: 'Esse cupom já foi utilizado' }
        }

        cart.voucher_id = voucher.id 

        voucher.used = true 
        
        await voucher.save()
        await cart.save()

        return { success: true, data: voucher }
    }

}

module.exports = VoucherService