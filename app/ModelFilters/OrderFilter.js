'use strict'

const ModelFilter = use('ModelFilter')

class OrderFilter extends ModelFilter {

    isOpened(is_opened) {
        return this.where('orders.is_opened', is_opened)
    }

}

module.exports = OrderFilter
