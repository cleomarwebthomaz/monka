'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PaymentMethod extends Model {

    static sortable() {
        return ['id', 'name', 'description', 'observation']
    }

    static boot() {
        super.boot()
        this.addTrait('Sortable')
        this.addTrait('@provider:Lucid/SoftDeletes')
    }

}

module.exports = PaymentMethod
