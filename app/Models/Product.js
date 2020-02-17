'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')
const ProductFilter = use('App/ModelFilters/ProductFilter')

class Product extends Model {

    static sortable() {
        return ['id', 'name', 'description', 'price', 'created_at', 'uptaded_at']
    }

    static get computed() {
        return ['image_url', 'total_price']
    }

    getTotalPrice(product) {
        // console.log(product)
    }

    getImageUrl({ image }) {
        return `${Env.get('APP_URL')}/image/uploads?src=/products/image/${image}`
    }

    static boot() {
        super.boot()
        this.addTrait('Sortable')
        this.addTrait('@provider:Filterable', ProductFilter)
        this.addTrait('@provider:Lucid/SoftDeletes')
        this.addTrait('@provider:Lucid/Slugify', {
            fields: { slug: 'name' },
            strategy: 'dbIncrement',
            disableUpdates: false
        })
    }

    images() {
        return this.hasMany('App/Models/ProductImage')
    }

    attribute() {
      return this.hasOne('App/Models/ProductAttribute')
    }

    options() {
      return this.hasMany('App/Models/ProductOption')
    }

    groups() {
        return this.hasMany('App/Models/ProductGroup')
    }

    categories() {
        return this.belongsToMany('App/Models/Category')
    }

}

module.exports = Product
