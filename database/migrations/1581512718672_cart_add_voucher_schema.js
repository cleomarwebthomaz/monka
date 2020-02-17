'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CartAddVoucherSchema extends Schema {
  up () {
    this.create('cart_add_vouchers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cart_add_vouchers')
  }
}

module.exports = CartAddVoucherSchema
