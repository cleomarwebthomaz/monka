'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCartProductOptionsSchema extends Schema {
  up () {
    this.create('cart_product_options', (table) => {
      table.increments()

      table.integer('cart_product_id').unsigned()
      table.foreign('cart_product_id').references('id').inTable('cart_products').onDelete('CASCADE').onUpdate('CASCADE')

      table.integer('product_group_id').unsigned()
      table.foreign('product_group_id').references('id').inTable('product_groups').onDelete('CASCADE').onUpdate('CASCADE')

      table.integer('product_group_option_id').unsigned()
      table.foreign('product_group_option_id').references('id').inTable('product_group_options').onDelete('CASCADE').onUpdate('CASCADE')

      table.integer('quantity').defaultTo(1)

      table.timestamps()
    })
  }

  down () {
    this.drop('cart_product_options')
  }
}

module.exports = CreateCartProductOptionsSchema
