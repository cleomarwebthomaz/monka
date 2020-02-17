'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddPaymentMethodOrdersSchema extends Schema {
  up () {
    this.table('orders', (table) => {

      table.integer('payment_method_id').unsigned()
      table
        .foreign('payment_method_id')
        .references('id')
        .inTable('payment_methods')
        .onUpdate('cascade')
        .onUpdate('cascade')

    })
  }

  down () {
    this.table('orders', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddPaymentMethodOrdersSchema
