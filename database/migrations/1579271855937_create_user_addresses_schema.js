'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateUserAddressesSchema extends Schema {
  up () {
    this.create('user_addresses', (table) => {
      table.increments()

      table.integer('user_id').unsigned()
      table
          .foreign('user_id')
          .references('id')
          .inTable('users')
          .onUpdate('cascade')
          .onDelete('cascade')

      table.integer('city_id').unsigned()
      table
          .foreign('city_id')
          .references('id')
          .inTable('cities')
          .onUpdate('cascade')
          .onDelete('cascade')

      table.integer('neighborhood_id').unsigned()
      table
          .foreign('neighborhood_id')
          .references('id')
          .inTable('neighborhoods')
          .onUpdate('cascade')
          .onDelete('cascade')

      table.string('name')
      table.string('phone')
      table.string('cep', 11)
      table.string('street').notNullable()
      table.integer('number').notNullable()
      table.string('complement')
      table.boolean('is_default')
      table.string('observation')
      table.datetime('deleted_at')

      table.timestamps()
    })
  }

  down () {
    this.drop('create_user_addresses')
  }
}

module.exports = CreateUserAddressesSchema
