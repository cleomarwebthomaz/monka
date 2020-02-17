'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreditsSchema extends Schema {
  up () {
    this.create('credits', (table) => {
      table.increments()

      table.integer('credit_rule_id').unsigned()
      table
          .foreign('credit_rule_id')
          .references('id')
          .inTable('credit_rules')
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
      table.string('order_ids')
      table.datetime('deleted')

      table.timestamps()
    })
  }

  down () {
    this.drop('credits')
  }
}

module.exports = CreditsSchema
