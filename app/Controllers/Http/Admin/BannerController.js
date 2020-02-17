'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Helpers = use('Helpers')
const { validateAll } = use('Validator')

const Banner = use('App/Models/Banner')

/**
 * Resourceful controller for interacting with banners
 */
class BannerController {
  /**
   * Show a list of all banners.
   * GET banners
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    const banners = await Banner.query().orderBy('id', 'desc').fetch()
    return response.json(banners)
  }

  /**
   * Create/save a new banner.
   * POST banners
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
      let rules = {
        name: 'required',
        hook: 'required',
        link: 'string:allowNull|url',
        link_target: 'string:allowNull|in:_self,_blank',
      }

      const validation = await validateAll(request.all(), rules)
      if (validation.fails()) {
          return response.json({ success: false, errors: validation.messages() })
      }

      const data = request.only(['name', 'description', 'active', 'link', 'link_target', 'hook'])

      const image = request.file('image', { types: ['image'], size: '2mb' })

      const imageName = `${Date.now()}-${image.clientName}`
      await image.move(Helpers.tmpPath('uploads/banners'), { name: imageName })
      if (!image.moved()) {
        return response.json({ success: false, errors: image.error() })
      }

      data.image = imageName

      const banner = await Banner.create(data)

      return response.json({ success: true, data: banner })
  }

  /**
   * Display a single banner.
   * GET banners/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const banner = await Banner.findOrFail(params.id)
    return response.json(banner)
  }

  /**
   * Update banner details.
   * PUT or PATCH banners/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const data = request.only(['name', 'description', 'active', 'link', 'link_target', 'hook'])

      const banner = await Banner.findOrFail(params.id)

      if (request.file('image')) {
        const image = request.file('image', { types: ['image'], size: '2mb' })
        const imageName = `${Date.now()}-${image.clientName}`
        await image.move(Helpers.tmpPath('uploads/banners'), { name: imageName })
      
        if (!image.moved()) {
          return response.json({ success: false, errors: image.error() })
        } else {
          if (banner.image) {
            const fs = Helpers.promisify(require('fs'))
            await fs.unlink(Helpers.tmpPath(`/uploads/banners/${banner.image}`))
          }            
        }

        data.image = imageName
      }

      banner.merge(data)
      await banner.save()

      return response.json({ success: true, data: banner })
      
    } catch (errors) {
      return response.json({ success: false, errors })
    }    
  }

  /**
   * Delete a banner with id.
   * DELETE banners/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    try {
      const banner = await Banner.findOrFail(params.id)

      if (banner.image) {
        const fs = Helpers.promisify(require('fs'))
        await fs.unlink(Helpers.tmpPath(`/uploads/banners/${banner.image}`))
      }

      await banner.delete()
      return response.json(true)
    } catch (error) {
        return response.json({ success: false, error })
    }    
  }
}

module.exports = BannerController
