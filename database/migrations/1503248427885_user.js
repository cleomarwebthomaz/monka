'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).unique()
      table.string('name').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('phone', 25)
      table.enum('person_type', ['legal', 'individual'])
      table.string('document').unique()
      table.string('active').defaultTo(0)
      table.string('password', 60).notNullable()
      table.string('token')
      table.boolean('completed_register').defaultTo(1)
      table.datetime('token_created_at')
      table.string('push_token')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
