'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCartProductsSchema extends Schema {
  up () {
    this.create('cart_products', (table) => {
      table.increments()
      table.integer('cart_id').unsigned().notNullable()
      table.foreign('cart_id').references('id').inTable('carts').onDelete('CASCADE').onUpdate('CASCADE')

      table.integer('product_id').unsigned().notNullable()
      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE').onUpdate('CASCADE') 
      
      table.integer('quantity').unsigned().defaultTo(1).notNullable()

      table.string('observation')
      
      table.datetime('deleted_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('cart_products')
  }
}

module.exports = CreateCartProductsSchema
