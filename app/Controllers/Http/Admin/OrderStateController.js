'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { validateAll } = use('Validator')

const OrderState = use('App/Models/OrderState')

/**
 * Resourceful controller for interacting with orderstates
 */
class OrderStateController {
  /**
   * Show a list of all orderstates.
   * GET orderstates
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    const query = await OrderState
      .query()
      .orderBy('id', 'desc')
      .fetch()

    return response.json(query)
  }

  /**
   * Create/save a new orderstate.
   * POST orderstates
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

        const data = request.only(['name', 'description', 'active', 'label', 'color'])

        data.active = data.active ? true : false

        const orderState = await OrderState.create(data)

        return response.json(orderState)

    } catch (error) {
        return response.json({ success: false, errors: error.message });
    }
}

  /**
   * Display a single orderstate.
   * GET orderstates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response }) {
    const orderState = await OrderState.findOrFail(params.id)
    return response.json(orderState)
}

  /**
   * Update orderstate details.
   * PUT or PATCH orderstates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
        const data = request.only(['name', 'description', 'active', 'label', 'color'])

        data.active = data.active ? true : false

        const orderState = await OrderState.findOrFail(params.id)

        orderState.merge(data)
        await orderState.save()

        return response.json({success: true})

    } catch (error) {
        return response.json({success: false, error: 'Erro ao atualizar. Tente novamente'});
    }
}

  /**
   * Delete a orderstate with id.
   * DELETE orderstates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    try {
        const orderState = await OrderState.findOrFail(params.id)
        await orderState.delete()
        response.json(true)
    } catch (error) {
        return response.json({ success: false, error: error.message })
    }
}
}

module.exports = OrderStateController
