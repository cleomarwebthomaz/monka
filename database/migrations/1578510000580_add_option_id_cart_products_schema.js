'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddOptionIdCartProductsSchema extends Schema {
  up () {
    this.table('cart_products', (table) => {
      table.integer('product_option_id').unsigned()
      table.foreign('product_option_id').references('id').inTable('product_options').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.table('cart_products', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddOptionIdCartProductsSchema
