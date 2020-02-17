'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Helpers = use('Helpers')
const uniqid = require('uniqid')

const Page = use('App/Models/Page')

/**
 * Resourceful controller for interacting with pages
 */
class PageController {
  /**
   * Show a list of all pages.
   * GET pages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    const pages = await Page
                        .query()
                        .orderBy('id', 'desc')
                        .fetch()

    return response.json(pages)
  }

  async show({ params, response }) {
    const page = await Page.find(params.id)

    return response.json(page)
  }
  
  /**
   * Create/save a new page.
   * POST pages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['title', 'content', 'active'])

    data.image = await this._uploadImage(request, 'image')

    data.active = data.active ? true : false

    const page = await Page.create(data)

    return response.json(page)
  }

  /**
   * Update page details.
   * PUT or PATCH pages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.only(['title', 'content', 'active'])

    const page = await Page.findOrFail(params.id)

    data.image = await this._uploadImage(request, 'image')

    data.active = data.active ? true : false

    page.merge(data)

    await page.save()

    return response.json(page)
  }

  async _uploadImage(request, fieldName, name=null) {
    const image = request.file(fieldName, {
      types: ['image'],
      size: '2mb'
    })

    if (!image) return name

    const imageRandName = uniqid() + `.${image.extname}`
    const imageName = name ? name : imageRandName

    await image.move(Helpers.tmpPath(`uploads/pages/${fieldName}`), {
      name: imageName,
      overwrite: true
    })

    if (!image.moved()) {
      return image.error()
    }

    return imageName
  }
  /**
   * Delete a page with id.
   * DELETE pages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const page = await Page.findOrFail(params.id)
    await page.delete()
  }
}

module.exports = PageController
