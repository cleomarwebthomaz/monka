'use strict'

const UserAddress = use('App/Models/UserAddress')

class UserAddressController {

    async index({ response, params }) {
        const userAddresses = await UserAddress
                                    .query()
                                    .where('user_addresses.id', params.user_id)
                                    .orderBy('user_addresses.id', 'desc')
                                    .with('city.state')
                                    .with('neighborhood')
                                    .fetch()

        return response.json(userAddresses)
    }

}

module.exports = UserAddressController
