'use strict'

const Helpers = use('Helpers')
const delay = require('delay')

const Product = use('App/Models/Product')
const ProductImage = use('App/Models/ProductImage')

class ProductImageController {

  async index({ params, response }) {
    const product = await Product.findOrFail(params.product_id)
    const images = await product.images().fetch()

    return response.json(images)
  }

  async store({ request, response, params }) {
    const product = await Product.findOrFail(params.product_id)

    const image = request.file('image', {
      types: ['image'],
      size: '2mb'
    })

    const imageName = `${Date.now()}-${image.clientName}`

    await image.move(Helpers.tmpPath('uploads/product-images'), {
      name: imageName
    })
  
    if (!image.moved()) {
      return response.json({ success: false, errors: image.error() })
    }

    const productImage = await ProductImage.create({ product_id: product.id, image: imageName })

    return response.json({
      success: true,
      image: productImage,
      data: await product.images().fetch()
    })
  }
  
  async destroy({ params, response }) {
    try {
        const productImage = await ProductImage.findOrFail(params.id)

        if (productImage.image) {
          const fs = Helpers.promisify(require('fs'))
          await fs.unlink(Helpers.tmpPath(`/uploads/product-images/${productImage.image}`))
        }

        await productImage.delete()
        return response.json(true)
    } catch (error) {
        return response.json({ success: false, error: 'Não foi possível remover esse registro. Tente novamente.' })
    }
  }

}

module.exports = ProductImageController
