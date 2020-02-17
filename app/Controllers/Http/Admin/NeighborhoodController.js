'use strict'

const { validate } = use('Validator')
const Neighborhood = use('App/Models/Neighborhood')

class NeighborhoodController {

  async index ({ response }) {
    const neighborhoods = await Neighborhood
                                  .query()
                                  .orderBy('id', 'desc')
                                  .with('city.state')
                                  .orderBy('neighborhoods.id', 'desc')
                                  .fetch()

    return response.json(neighborhoods)
  }

  async store ({ request, response }) {
    try {
        let rules = {
            name: 'required',
            price: 'required'
        }

        const validation = await validate(request.all(), rules)
        if (validation.fails()) {
            return response.json({ success: false, validations: validation.messages() })
        }

        const data = request.only(['name', 'description', 'observation', 'price', 'active'])

        data.city_id = 1
        data.active = 1

        const neighborhood = await Neighborhood.create(data)

        return response.json({ success: true, data: neighborhood })
    } catch (error) {
      return response.json({ success: false, error: error.message })
    }      
  }

  async show ({ params, response }) {
    const neighborhood = await Neighborhood.findOrFail(params.id)
    await neighborhood.load('city.state')
    return response.json(neighborhood)
  }

  async update ({ params, request, response }) {
    try {
      let rules = {
        name: 'required',
        price: 'required',
      }

      const validation = await validateAll(request.all(), rules)
      if (validation.fails()) {
          return response.json({ success: false, validations: validation.messages() })
      }

      const data = request.only(['name', 'description', 'observation', 'price', 'active'])

      const neighborhood = await Neighborhood.findOrFail(params.id)

      neighborhood.merge(data)
      await neighborhood.save()

      return response.json({ success: true, data: neighborhood })
      
    } catch (error) {
      return response.json({ success: false, error: error.message })
    }    
  }

  async destroy ({ params, response }) {
    const neighborhood = await Neighborhood.findOrFail(params.id)
    await neighborhood.delete()
    return response.json(true)
  }

}

module.exports = NeighborhoodController
