'use strict'

const ProductGroup = use('App/Models/ProductGroup')

class ProductGroupController {

  async store({ params, response }) {
    const group = await ProductGroup.create({ product_id: params.product_id, name: 'Novo Grupo' })
    return response.json(group)
  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'price', 'description', 'max', 'min', 'type'])

    const group = await ProductGroup.find(params.id)

    group.merge(data)
    await group.save()

    return response.json(true)
  }

  async destroy ({ params, response }) {
    const group = await ProductGroup.find(params.id)
    await group.delete()
    return response.json(true)
  }

}

module.exports = ProductGroupController
