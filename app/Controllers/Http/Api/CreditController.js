'use strict'

const CreditService = use('App/Services/Credit')
const Credit = use('App/Models/Credit')

class CreditController {

     async index({ params, response, auth }) {
        const credits = await CreditService.getByUser({ user_id: auth.user.id })
        return response.json(credits)
    }

     async show({ params, response, auth }) {
        const credit = await Credit
                                .query()
                                .where({
                                    id: params.id,
                                    user_id: auth.user.id
                                })
                                .first()

        return response.json(credit)
    }

}

module.exports = CreditController
