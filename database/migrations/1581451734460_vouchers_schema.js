'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VouchersSchema extends Schema {
  up () {
    this.create('vouchers', (table) => {
      table.increments()

      table.integer('user_id').unsigned()
      table
          .foreign('user_id')
          .references('id')
          .inTable('users')
          .onUpdate('cascade')
          .onDelete('cascade')
     
      table.string('name').notNullable()
      table.text('description')
      table.string('code').notNullable()
      table.integer('limit')
      table.integer('limit_by_user')

      table.enum('discount_type', ['money', 'percentage']).defaultTo('money')
      table.decimal('discount_value')

      table.boolean('used').defaultTo(0)
      table.boolean('free_shipping').defaultTo(0)
      table.boolean('visible').defaultTo(0)

      table.boolean('active').defaultTo(1)
      table.text('description')
      
      table.datetime('date_start')
      table.datetime('date_end')

      table.timestamps()
    })
  }

  down () {
    this.drop('vouchers')
  }
}

module.exports = VouchersSchema
