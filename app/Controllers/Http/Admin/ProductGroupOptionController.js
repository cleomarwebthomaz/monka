'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ProductGroupOption = use('App/Models/ProductGroupOption')

/**
 * Resourceful controller for interacting with productgroupoptions
 */
class ProductGroupOptionController {

  async index ({ response }) {
    const productGroupOption = await ProductGroupOption.where('product_id', params.product_id).all()
    return response.json(productGroupOption)
  }

  async store ({ params, response }) {
    const option = await ProductGroupOption.create({
      product_group_id: params.group_id,
      name: 'Nova Opção',
      price: 0
    })

    return response.json(option)
  }

  async update ({ params, request, response }) {
      const data = request.only(['name', 'price'])

      const option = await ProductGroupOption.find(params.id)

      option.merge(data)
      await option.save()

      return response.json(true)
  }

  async destroy ({ params, response }) {
      const option = await ProductGroupOption.find(params.id)
      await option.delete()
      return response.json(true)
  }

}

module.exports = ProductGroupOptionController
