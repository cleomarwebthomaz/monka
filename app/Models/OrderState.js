'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderState extends Model {

    static sortable() {
        return ['id', 'name', 'label', 'color', 'created_at', 'uptaded_at']
    }

    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
    }

}

module.exports = OrderState
