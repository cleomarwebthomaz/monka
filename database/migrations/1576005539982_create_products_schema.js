'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateProductsSchema extends Schema {
    up() {
        this.create('products', (table) => {
            table.increments()
            table.string('slug')
            table.string('name').notNullable()
            table.decimal('price').defaultTo(0.00).notNullable()
            table.text('description')
            table.text('short_description').notNullable()
            table.string('image')
            table.string('options_title')
            table.text('options_description')
            table.boolean('active').defaultTo(0)
            table.datetime('deleted_at')
            table.timestamps()
        })
    }

    down() {
        this.drop('products')
    }
}

module.exports = CreateProductsSchema
