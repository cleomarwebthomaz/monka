'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateOrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()

      table.integer('user_id').unsigned()
      table.integer('cart_id').unsigned()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.foreign('cart_id').references('id').inTable('carts').onDelete('CASCADE').onUpdate('CASCADE')

      table.string('observation')
      table.boolean('is_opened').defaultTo(1)
      table.datetime('deleted_at')

      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = CreateOrdersSchema
