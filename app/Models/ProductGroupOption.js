'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductGroupOption extends Model {

  static boot() {
    super.boot()
    this.addTrait('@provider:Lucid/SoftDeletes')
  }

}

module.exports = ProductGroupOption
