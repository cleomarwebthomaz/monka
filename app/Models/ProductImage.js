'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class ProductImage extends Model {

  static get computed() {
    return ['url']
  }

  getUrl({ image }) {
      return `${Env.get('APP_URL')}/image/uploads?src=/product-images/${image}`
  }

}

module.exports = ProductImage
