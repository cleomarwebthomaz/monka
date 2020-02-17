'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreatePagesSchema extends Schema {
  up () {
    this.create('pages', (table) => {
      table.increments()
      table.string('slug')
      table.string('title').notNullable()
      table.string('subtitle')
      table.text('content')
      table.string('image')
      table.boolean('active').defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('pages')
  }
}

module.exports = CreatePagesSchema
