'use strict'

const Voucher = use('App/Models/Voucher')

class VoucherController {

    async index({ response, auth }) {
        const vouchers = await Voucher
                                .query()
                                .where('user_id', auth.user.id)
                                .orderBy('vouchers.id', 'desc')
                                .fetch()

        return response.json(vouchers)
    }

}

module.exports = VoucherController
