'use strict'

const { validate } = use('Validator')
var pusher = use('App/Services/Pusher')

const Setting = use('App/Models/Setting')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with settings
 */
class SettingController {

  async getAll({ response }) {
    const settings = await Setting.query().fetch()

    const listSettings = settings.toJSON()
    const list = {}

    listSettings.map(setting => {
      const object = {}
      object.name = setting.name
      object.public_name = setting.public_name
      object.label = setting.label
      object.value = setting.value
      object.id = setting.id
      list[setting.name] = object;
    })

    pusher.trigger('monka', `configuration`, list)

    return response.json(list)
  }

  /**
   * Show a list of all settings.
   * GET settings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    const settings = await Setting.query().orderBy('id', 'desc').fetch()
    return response.json(settings)
  }


  /**
   * Create/save a new setting.
   * POST settings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
        let rules = { 
            name: 'required|unique:settings,name',
            label: 'required',
            public_name: 'required',
        }

        const validation = await validate(request.all(), rules, {
          'name.required': 'Informe o nome da obrigatório.',
          'name.unique': 'Já existe uma configuração com esse nome.',
          'label.required': 'Esse campo obrigatório',
          'public_name.required': 'Esse campo obrigatório',
        })

        if (validation.fails()) {
            return response.json({ success: false, validations: validation.messages() })
        }

        const data = request.only(['name', 'label', 'public_name', 'value'])

        const setting = await Setting.create(data)

        return response.json({ success: true, setting });

    } catch (error) {
        return response.json({ success: false, error: error.mesage });
    }
  }

  /**
   * Display a single setting.
   * GET settings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const setting = await Setting.findOrFail(params.id)
    return response.json(setting)
  }

  /**
   * Update setting details.
   * PUT or PATCH settings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response, params }) {
    try {
        let rules = { 
            name: `required|unique:settings,name,id,${params.id}`,
            label: 'required',
            public_name: 'required',
        }

        const validation = await validate(request.all(), rules, {
          'name.required': 'Informe o nome da obrigatório.',
          'name.unique': 'Já existe uma configuração com esse nome.',
          'label.required': 'Esse campo obrigatório',
          'public_name.required': 'Esse campo obrigatório',
        })

        if (validation.fails()) {
            return response.json({ success: false, validations: validation.messages() })
        }

        const data = request.only(['name', 'label', 'public_name', 'value'])

        const setting = await Setting.findOrFail(params.id)

        setting.merge(data)

        await setting.save()

        pusher.trigger('monka', 'teste', setting)
        pusher.trigger('monka', 'updatedSettings', setting)

        return response.json({ success: true, setting });

    } catch (error) {
        return response.json({ success: false, error: error.message });
    }
  }

  /**
   * Delete a setting with id.
   * DELETE settings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const setting = await Setting.findOrFail(params.id)
    await setting.delete()
  }
}

module.exports = SettingController
