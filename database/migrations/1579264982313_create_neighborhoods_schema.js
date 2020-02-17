'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateNeighborhoodsSchema extends Schema {
  up () {
    this.create('neighborhoods', (table) => {
      table.increments()

      table.integer('city_id').unsigned()
      table
          .foreign('city_id')
          .references('id')
          .inTable('cities')
          .onUpdate('cascade')
          .onUpdate('cascade')

      table.string('name').notNullable()
      table.string('description')
      table.string('observation')
      table.decimal('price')
      table.boolean('active').defaultTo(1)

      table.datetime('deleted_at')

      table.timestamps()
    })
  }

  down () {
    this.drop('neighborhoods')
  }
}

module.exports = CreateNeighborhoodsSchema
