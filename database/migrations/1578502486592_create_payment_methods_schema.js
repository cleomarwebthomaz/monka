'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreatePaymentMethodsSchema extends Schema {
  up () {
    this.create('payment_methods', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description')
      table.string('observation')
      table.boolean('active').nullable().defaultTo(0)
      table.datetime('deleted_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('payment_methods')
  }
}

module.exports = CreatePaymentMethodsSchema
