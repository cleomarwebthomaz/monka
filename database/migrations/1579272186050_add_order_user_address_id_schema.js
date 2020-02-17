'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddOrderUserAddressIdSchema extends Schema {
  up () {
    this.table('orders', (table) => {

      table.integer('user_address_id').unsigned()
      table
          .foreign('user_address_id')
          .references('id')
          .inTable('user_addresses')
          .onUpdate('cascade')
          .onDelete('cascade')

    })
  }

  down () {
    this.table('orders', (table) => {
      table.dropColumn('user_address_id')
    })
  }
}

module.exports = AddOrderUserAddressIdSchema
