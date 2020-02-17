'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatesSchema extends Schema {
  up () {
    this.create('states', (table) => {
      table.increments()
      table.string('name')
      table.string('uf')
      table.boolean('active').defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = StatesSchema
