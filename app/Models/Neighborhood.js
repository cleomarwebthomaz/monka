'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const NeighborhoodFilter = use('App/ModelFilters/NeighborhoodFilter')

class Neighborhood extends Model {

    static boot() {
        super.boot()
        this.addTrait('@provider:Filterable', NeighborhoodFilter)
    }

    city() {
        return this.belongsTo('App/Models/City')
    }

}

module.exports = Neighborhood
