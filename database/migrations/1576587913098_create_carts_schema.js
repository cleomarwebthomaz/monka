'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCartsSchema extends Schema {
  up () {
    this.create('carts', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.enum('status', ['active', 'aborted', 'finalized']).defaultTo('active')
      table.datetime('deleted_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('carts')
  }
}

module.exports = CreateCartsSchema
