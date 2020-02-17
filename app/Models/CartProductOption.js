'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CartProductOption extends Model {

    group() {
        return this.belongsTo('App/Models/ProductGroup')
    }

    option() {
        return this.belongsTo('App/Models/ProductGroupOption')
    }

}

module.exports = CartProductOption
