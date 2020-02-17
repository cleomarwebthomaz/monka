'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CartAddVoucherSchema extends Schema {
  up () {
    this.table('carts', (table) => {
      table.integer('voucher_id').unsigned()
      table
          .foreign('voucher_id')
          .references('id')
          .inTable('vouchers')
          .onUpdate('cascade')
          .onDelete('cascade')
    })
  }

  down () {
    this.table('carts', (table) => {
      table.dropColumn('voucher_id')
    })
  }
}

module.exports = CartAddVoucherSchema
