'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreditUsedsSchema extends Schema {
  up () {
    this.create('credit_useds', (table) => {
      table.increments()

      table.integer('order_id').unsigned()
      table
          .foreign('order_id')
          .references('id')
          .inTable('orders')
          .onUpdate('cascade')
          .onDelete('cascade')

      table.integer('user_id').unsigned()
      table
          .foreign('user_id')
          .references('id')
          .inTable('users')
          .onUpdate('cascade')
          .onDelete('cascade')

      table.decimal('value').defaultTo(0)
      table.datetime('deleted')

      table.timestamps()
    })
  }

  down () {
    this.drop('credit_useds')
  }
}

module.exports = CreditUsedsSchema
