'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateOrderStatesSchema extends Schema {
  up () {
    this.create('order_states', (table) => {
      table.increments()
      table.string('name')
      table.string('label')
      table.string('color')
      table.text('description')
      table.boolean('active').defaultTo(0)
      table.boolean('finalized').defaultTo(0)
      table.boolean('canceled').defaultTo(0)
      table.boolean('pending').defaultTo(0)
      table.boolean('sending').defaultTo(0)
      table.datetime('deleted_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('order_states')
  }
}

module.exports = CreateOrderStatesSchema
