'use strict'

const Page = use('App/Models/Page')

class PageController {

  async index ({ response }) {
    const pages = await Page
                        .query()
                        .orderBy('id', 'desc')
                        .fetch()

    return response.json(pages)
  }

  async show({ params, response }) {
    const page = await Page.findBy('slug', params.id)
    return response.json(page)
  }

}

module.exports = PageController
