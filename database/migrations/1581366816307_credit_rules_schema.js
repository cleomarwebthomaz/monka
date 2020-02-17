'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreditRulesSchema extends Schema {
  up () {
    this.create('credit_rules', (table) => {
      table.increments()

      table.string('name').notNullable()
      table.text('description')
      table.text('observation')
      table.integer('total_orders').notNullable().unsigned().defaultTo(10)
      table.date('date_start')
      table.date('date_end')
      table.boolean('active').defaultTo(1)
      table.datetime('deleted')

      table.timestamps()
    })
  }

  down () {
    this.drop('credit_rules')
  }
}

module.exports = CreditRulesSchema
