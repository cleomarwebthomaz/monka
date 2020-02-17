'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const CreditRuleFilter = use('App/ModelFilters/CreditRuleFilter')

class CreditRule extends Model {

    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Filterable', CreditRuleFilter)
    }

}

module.exports = CreditRule
