'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateProductGroupsOptionsSchema extends Schema {
    up() {
        this.create('product_group_options', (table) => {
            table.increments()
            table.integer('product_group_id').unsigned().notNullable()

            table
                .foreign('product_group_id')
                .references('id')
                .inTable('product_groups')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')

            table.string('name')
            table.decimal('price').defaultTo(0.00)
            table.string('description')
            table.datetime('deleted_at')
            table.timestamps()
        })
    }

    down() {
        this.drop('product_group_options')
    }
}

module.exports = CreateProductGroupsOptionsSchema