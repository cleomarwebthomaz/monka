'use strict'

var pusher = use('App/Services/Pusher')
const Setting = use('App/Models/Setting')

class SettingController {

  async index({ response }) {
    const settings = await Setting
                              .query()
                              .select('name', 'public_name', 'value')
                              .fetch()

    const listSettings = settings.toJSON()
    const list = {}

    listSettings.map(setting => {
      const object = {}
      object.name = setting.public_name
      object.value = setting.value
      list[setting.name] = object;
    })

    pusher.trigger('monka', `configuration`, list)

    return response.json(list)
  }

  async show({ params,response }) {
    const setting = await Setting.findOrFail(params.id)

    const object = {}
    object.name = setting.public_name
    object.value = setting.value
    
    return response.json(object)
  }

}

module.exports = SettingController
