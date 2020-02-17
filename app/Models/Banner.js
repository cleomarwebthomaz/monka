'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Banner extends Model {

  static get computed() {
    return ['image_url']
  }

  getImageUrl({ image }) {
    return `${Env.get('APP_URL')}/image/uploads?src=/banners/${image}`
  }  
}

module.exports = Banner
