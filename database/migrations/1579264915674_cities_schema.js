'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitiesSchema extends Schema {
  up () {
    this.create('cities', (table) => {
      table.increments()

      table.integer('state_id').unsigned()
      table
          .foreign('state_id')
          .references('id')
          .inTable('states')
          .onUpdate('cascade')
          .onUpdate('cascade')

      table.string('name')
      table.boolean('active').defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitiesSchema
