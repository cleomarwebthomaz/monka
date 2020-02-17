'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CartProduct extends Model {

    static boot() {
        super.boot()
        // this.addHook('afterFind', 'CartProductHook.getTotalPrice')
        // this.addHook('afterFetch', 'CartProductHook.getAllTotalPrice')
    }

    cart() {
        return this.belongsTo('App/Models/Cart')
    }

    groups() {
        return this.hasMany('App/Models/ProductGroup')
    }

    options() {
        return this.hasMany('App/Models/CartProductOption')
    }

    option() {
        return this.belongsTo('App/Models/ProductOption')
    }

    product() {
        return this.belongsTo('App/Models/Product')
    }
}

module.exports = CartProduct
