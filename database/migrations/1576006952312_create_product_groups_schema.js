'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateProductGroupsSchema extends Schema {
    up() {
        this.create('product_groups', (table) => {
            table.increments()

            table.integer('product_id').unsigned().notNullable()

            table
                .foreign('product_id')
                .references('id')
                .inTable('products')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')

            table.string('name')
            table.text('description')
            table.enum('type', ['select', 'radius', 'checkbox'])
            table.string('max')
            table.string('min')
            table.boolean('update_real_price').defaultTo(0)
            table.datetime('deleted_at')
            table.timestamps()
        })
    }

    down() {
        this.drop('product_groups')
    }
}

module.exports = CreateProductGroupsSchema
