'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserAddress extends Model {

    city() {
        return this.belongsTo('App/Models/City')
    }

    neighborhood() {
        return this.belongsTo('App/Models/Neighborhood')
    }
    
}

module.exports = UserAddress
