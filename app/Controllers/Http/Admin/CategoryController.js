'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const { validateAll } = use('Validator')
const Helpers = use('Helpers')
const Upload = use('App/Services/Upload')

const Category = use('App/Models/Category')

/**
 * Resourceful controller for interacting with categories
 */
class CategoryController {
    /**
     * Show a list of all categories.
     * GET categories
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async all({ response }) {
        const categories = await Category.all()
        return response.json(categories)
    }

    async index({ request, response }) {

        const query = await Category
            .query()
            .sortable(request)
            .orderBy('id', 'desc')
            .withCount('products')
            .withCount('categories')
            .with('parent')
            .fetch()

        return response.json(query)
    }

    /**
     * Create/save a new category.
     * POST categories
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        try {
            let rules = { name: 'required|min:3' }

            const validation = await validateAll(request.all(), rules)
            if (validation.fails()) {
                return response.json({ success: false, errors: validation.messages() })
            }

            const data = request.only(['name', 'parent_id', 'description', 'active'])

            data.active = data.active ? true : false

            if (request.file('image')) {
                const upload = new Upload(request)
                data.image = await upload.path('/uploads/categories/').upload('image')
            }

            const category = await Category.create(data)

            return response.json(category)

        } catch (error) {
            return response.json({ success: false, errors: 'Erro ao cadastrar a categoria. Tente novamente' });
        }
    }

    /**
     * Display a single category.
     * GET categories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, response }) {
        const category = await Category.findOrFail(params.id)
        return response.json(category)
    }

    /**
     * Update category details.
     * PUT or PATCH categories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response, session }) {
        try {
            const data = request.only(['name', 'parent_id', 'description', 'active'])

            data.parent_id = data.parent_id || null
            data.active = data.active ? true : false

            const category = await Category.findOrFail(params.id)

            if (request.file('image')) {
                if (category.image) {
                    const fs = Helpers.promisify(require('fs'))
                    await fs.unlink(Helpers.tmpPath(`/uploads/categories/${category.image}`))
                }
    
                var upload = new Upload(request)
                data.image = await upload.path('/uploads/categories/').upload('image', `${category.id}-${category.image}`)
            }

            category.merge(data)
            await category.save()

            return response.json({success: true})

        } catch (error) {
            return response.json({success: false, error: 'Erro ao cadastrar a categoria. Tente novamente'});
        }
    }

    /**
     * Delete a category with id.
     * DELETE categories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, response }) {
        try {
            const category = await Category.findOrFail(params.id)

            if (category.image) {
                const fs = Helpers.promisify(require('fs'))
                await fs.unlink(Helpers.tmpPath(`/uploads/categories/${category.image}`))
            }

            await category.delete()
            response.json(true)
        } catch (error) {
            return response.json({ success: false, error: 'Não foi possível remover esse registro. Tente novamente.' })
        }
    }

}

module.exports = CategoryController