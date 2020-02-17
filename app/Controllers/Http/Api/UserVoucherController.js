'use strict'

const Voucher = use('App/Models/Voucher')

class UserVoucherController {

    async index({ response, auth }) {
        const vouchers = await Voucher.query().where({
            user_id: auth.user.id
        })

        return response.json(vouchers)
    }

    async available({ response, auth }) {
        const vouchers = await Voucher.query().where({
            user_id: auth.user.id,
            used: false
        })

        return response.json(vouchers)
    }

}

module.exports = UserVoucherController
