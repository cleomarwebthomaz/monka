'use strict'

const Product = use('App/Models/Product')

class ProductController {

  async index({ response }) {
    const products = await Product
                        .query()
                        .with('options')
                        .with('images')
                        .with('groups.options')
                        .paginate()

    return response.json(products)
  }

  async show({ response, params }) {
    const product = await Product
                            .query()
                            .where('products.id', params.id)
                            .orWhere('products.slug', params.id)
                            .with('options')
                            .with('images')
                            .with('groups', (builder) => {
                              builder
                                .whereHas('options')
                                .with('options')
                            })
                            .first()

    return response.json(product)
  }

}

module.exports = ProductController
