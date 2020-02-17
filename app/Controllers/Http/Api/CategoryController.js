'use strict'

const Category = use('App/Models/Category')

class CategoryController {

  async index({ response }) {
    const categories = await Category
                                    .query()
                                    .withCount('products')
                                    .with('products', (builder) => {
                                      builder
                                        .with('options')
                                        .with('images')
                                        .with('groups.options')
                                    })
                                    .fetch()
    return response.json(categories)
  }

  async show({ response, params }) {
    const category = await Category.findOrFail(params.id)
    return response.json(category)
  }

}

module.exports = CategoryController
