'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreatePagesSchema extends Schema {
  up () {
    this.create('create_pages', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_pages')
  }
}

module.exports = CreatePagesSchema
