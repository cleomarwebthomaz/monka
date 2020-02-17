'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateBannersSchema extends Schema {
  up () {
    this.create('banners', (table) => {
      table.increments()
      table.string('hook').notNullable()
      table.string('name').notNullable()
      table.string('description')
      table.string('image').notNullable()
      table.string('link')
      table.string('link_target', ['_self', '_blank']).defaultTo('_blank')
      table.boolean('active').defaultTo(0)
      table.integer('sort').unsigned().defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('banners')
  }
}

module.exports = CreateBannersSchema
