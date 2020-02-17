'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cart extends Model {

    static boot() {
        super.boot()
    }

    static async getUserCart(user_id) {
        const cart = await this.findOrCreate({
            user_id,
            status: 'active'
        })

        return cart
    }

    voucher() {
        return this.belongsTo('App/Models/Voucher')
    }

    products() {
        return this.hasMany('App/Models/CartProduct')
    }

}

module.exports = Cart
