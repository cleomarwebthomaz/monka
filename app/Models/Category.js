'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')
const CategoryFilter = use('App/ModelFilters/CategoryFilter')

class Category extends Model {

    static sortable() {
        return ['id', 'parent_id', 'name', 'created_at', 'uptaded_at']
    }

    static boot() {
        super.boot()

        this.addTrait('Sortable')
        this.addTrait('@provider:Filterable', CategoryFilter)
        this.addTrait('@provider:Lucid/Slugify', {
            fields: { slug: 'name' },
            strategy: 'dbIncrement',
            disableUpdates: false
        })
    }

    static get computed() {
        return ['image_url']
    }

    getImageUrl({ image }) {
      if (!image) return null
        return `${Env.get('APP_URL')}/image/uploads/?src=/categories/${image}`
    }

    parent() {
        return this.belongsTo('App/Models/Category', 'parent_id', 'id')
    }

    categories() {
        return this.hasMany('App/Models/Category', 'id', 'parent_id')
    }

    products() {
        return this.belongsToMany('App/Models/Product')
    }

}

module.exports = Category
