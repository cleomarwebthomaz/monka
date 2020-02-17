'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateProductImagesSchema extends Schema {
  up () {
    this.create('product_images', (table) => {
      table.increments()
      table.integer('product_id').unsigned()
      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE').onUpdate('CASCADE')

      table.string('image').notNullable()
      table.integer('sort').defaultTo(0)
      table.boolean('active').defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('product_images')
  }
}

module.exports = CreateProductImagesSchema
