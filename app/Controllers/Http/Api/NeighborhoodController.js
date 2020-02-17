'use strict'

const Neighborhood = use('App/Models/Neighborhood')

class NeighborhoodController {

    async index({ response }) {
        const neighborhoods = await Neighborhood
                                    .query()
                                    .orderBy('neighborhoods.id', 'desc')
                                    .fetch()
                                    
        return response.json(neighborhoods)
    }

}

module.exports = NeighborhoodController
