'use strict'

class HomeController {

    async index({ view }) {
        return view.render('front.pages.home')
    }

}

module.exports = HomeController
