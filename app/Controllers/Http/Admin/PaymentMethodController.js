'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PaymentMethod = use('App/Models/PaymentMethod')

/**
 * Resourceful controller for interacting with paymentmethods
 */
class PaymentMethodController {
  /**
   * Show a list of all paymentmethods.
   * GET paymentmethods
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response }) {
    const paymentMethods = await PaymentMethod
        .query()
        .sortable(request)
        .orderBy('id', 'desc')
        .fetch()

    return response.json(paymentMethods)
}

  /**
   * Create/save a new paymentmethod.
   * POST paymentmethods
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
        let data = request.only(['name', 'description', 'observation', 'active'])

        const paymentMethod = await PaymentMethod.create(data)

        return response.json(paymentMethod)
    } catch(error) {
        return response.json(error.message)
    }
}

  /**
   * Display a single paymentmethod.
   * GET paymentmethods/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const paymentMethod = await PaymentMethod.find(params.id)
    return response.json(paymentMethod)    
  }


  /**
   * Update paymentmethod details.
   * PUT or PATCH paymentmethods/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
        let data = request.only(['name', 'description', 'observation', 'active'])

        const paymentMethod = await PaymentMethod.findOrFail(params.id)

        paymentMethod.merge(data)

        await paymentMethod.save()

        return response.json(true)

    } catch (error) {
        return response.json(error.message)
    }
}

  /**
   * Delete a paymentmethod with id.
   * DELETE paymentmethods/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const paymentMethod = await PaymentMethod.findOrFail(params.id)
    await paymentMethod.delete()
    return response.json(true)
  }
}

module.exports = PaymentMethodController
