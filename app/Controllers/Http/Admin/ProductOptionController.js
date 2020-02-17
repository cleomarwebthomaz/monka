'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ProductOption = use('App/Models/ProductOption')

/**
 * Resourceful controller for interacting with productOptions
 */
class ProductOptionController {

  async index({ params, response }) {
    const attribute = await ProductOption
                                  .query()
                                  .where({ product_id: params.product_id })
                                  .fetch()

    return response.json(attribute)
  }

  async store({ response, params }) {
    const option = await ProductOption.create({
      name: 'Nova Opção',
      product_id: params.product_id,
      price: 0
    })

    return response.json(option)
  }

  async update ({ params, request, response }) {
    const attribute = await ProductOption.findOrFail(params.id)

    const data = request.only(['name', 'price'])

    attribute.merge(data)
    await attribute.save()

    return response.json(true)
  }

  async destroy ({ params, response }) {
    const attribute = await ProductOption.find(params.id)
    await attribute.delete()
    return response.json(true)
  }

}

module.exports = ProductOptionController
