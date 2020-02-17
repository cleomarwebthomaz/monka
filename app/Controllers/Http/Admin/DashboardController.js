'use strict'

class DashboardController {

    async index({ view }) {
        return view.render('back.pages.dashboard.index')
    }

}

module.exports = DashboardController
