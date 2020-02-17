'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductOption extends Model {

  static boot() {
    super.boot()
    this.addTrait('@provider:Lucid/SoftDeletes')
  }

  product() {
    return this.belongsTo('App/Models/Product')
  }

  group() {
    return this.belongsTo('App/Models/ProductGroup')
  }

}

module.exports = ProductOption
