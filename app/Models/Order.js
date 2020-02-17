'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const OrderFilter = use('App/ModelFilters/OrderFilter')

class Order extends Model {

    static boot() {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Filterable', OrderFilter)
    }

    static castDates(field, value) {
        if (field == "created_at") {
            return value ? value.format("DD/MM/YYYY hh:mm") : value;
        }

        return value ? value.format("DD/MM/YYYY hh:mm") : value;
    }

    user() {
        return this.belongsTo('App/Models/User')
    }

    address() {
        return this.belongsTo('App/Models/UserAddress')
    }

    cart() {
        return this.belongsTo('App/Models/Cart')
    }

    state() {
        return this.belongsTo('App/Models/OrderState')
    }
    
    paymentMethod() {
        return this.belongsTo('App/Models/PaymentMethod')
    }

}

module.exports = Order
