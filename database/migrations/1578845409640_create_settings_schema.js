'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateSettingsSchema extends Schema {
  up () {
    this.create('settings', (table) => {
      table.increments()
      table.string('name').unique()
      table.string('label')
      table.string('public_name')
      table.text('value')
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('settings')
  }
}

module.exports = CreateSettingsSchema
