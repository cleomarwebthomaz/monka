'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateProductOptionsSchema extends Schema {
  up () {
    this.create('product_options', (table) => {
      table.increments()
      table.integer('product_id').unsigned()
      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE').onUpdate('CASCADE')

      table.string('name').notNullable()
      table.decimal('price')
      table.boolean('active').defaultTo(1)
      table.datetime('deleted_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_options')
  }
}

module.exports = CreateProductOptionsSchema
