'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.integer('parent_id').unsigned().nullable()
      table.string('slug')
      table.string('name').notNullable()
      table.text('description')
      table.string('image')
      table.string('sort').defaultTo(0)
      table.boolean('active').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CreateCategorySchema
