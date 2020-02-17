'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Product = use('App/Models/Product')
const Category = use('App/Models/Category')

const Upload = use('App/Services/Upload')

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
    /**
     * Show a list of all products.
     * GET products
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response }) {
        const products = await Product
            .query()
            .sortable(request)
            .filter(request)
            .orderBy('id', 'desc')
            .with('categories')
            .fetch()

        return response.json(products)
    }

    /**
     * Create/save a new product.
     * POST products
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        try {
            let data = request.only(['name', 'short_description', 'description', 'price', 'options_title', 'options_description'])

            const product = await Product.create(data)

            if (request.input('categories')) {
                await product.categories().attach(request.input('categories'))
            }

            if (request.file('image')) {
                const upload = new Upload(request)
                data.image = await upload.path('/uploads/products/image/').upload('image')
            }

            return response.json(product)

        } catch(error) {
            return response.json(error)
        }
    }

    /**
     * Display a single product.
     * GET products/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, response }) {
        const product = await Product.find(params.id)
        const categorySelectedIds = await product.categories().ids()

        await product.load('groups', (builder) => {
            builder.with('options')
        })

        product.categories = categorySelectedIds

        return response.json(product)
    }

    /**
     * Update product details.
     * PUT or PATCH products/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        try {
            let data = request.only(['name', 'short_description', 'description', 'price', 'options_title', 'options_description'])

            const product = await Product.findOrFail(params.id)

            if (request.file('image')) {
              const upload = new Upload(request)
              data.image = await upload.path('/uploads/products/image/').upload('image')
            }

            product.merge(data)

            await product.save()
            await product.categories().sync(request.input('categories'))

            return response.json(true)

        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Delete a product with id.
     * DELETE products/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, response }) {
        const product = await Product.find(params.id)
        await product.delete()
        return response.json(true)
    }
}

module.exports = ProductController
