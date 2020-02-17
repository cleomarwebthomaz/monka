'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnOrderStatesSchema extends Schema {
  up () {
    this.table('orders', (table) => {
      table.integer('order_state_id').unsigned()
      table.foreign('order_state_id').references('id').inTable('order_states').onUpdate('cascade').onUpdate('cascade')
    })
  }

  down () {
    this.table('orders', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddColumnOrderStatesSchema
