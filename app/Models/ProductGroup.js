'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductGroup extends Model {

    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
    }

    product() {
        return this.belongsTo('App/Models/Product')
    }

    options() {
        return this.hasMany('App/Models/ProductGroupOption')
    }

}

module.exports = ProductGroup