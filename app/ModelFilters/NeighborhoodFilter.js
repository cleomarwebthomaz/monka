'use strict'

const ModelFilter = use('ModelFilter')

class NeighborhoodFilter extends ModelFilter {

    name(name) {
        return this.where('orders.name', 'LIKE', `"${name}"`)
    }

}

module.exports = NeighborhoodFilter
