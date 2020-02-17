'use strict'

const { validate } = use('Validator')

const UserAddress = use('App/Models/UserAddress')

class MyAddressController {

    async index({ response, auth }) {
        const userAddresses = await UserAddress
                                    .query()
                                    .where('user_id', auth.user.id)
                                    .orderBy('user_addresses.id', 'desc')
                                    .with('city.state')
                                    .with('neighborhood')
                                    .fetch()

        return response.json(userAddresses)
    }

    async show({ response, auth, params }) {
        const userAddress = await UserAddress
                                    .query()
                                    .where({
                                        id: params.id,
                                        user_id: auth.user.id
                                    })
                                    .with('city.state')
                                    .with('neighborhood')
                                    .first()

        return response.json(userAddress)
    }

    async store({ auth, response, request }) {
        try {
            const total_address = await UserAddress
                                            .query()
                                            .where('user_id', auth.user.id)
                                            .count('id as total')
                                            .first()

            const rules = {
                street: 'required',
                number: 'required|integer',
                neighborhood_id: 'required|integer'
            }

            const validation = await validate(request.all(), rules, {
                'street.required': 'Campo obrigatório',
                'number.required': 'Campo obrigatório',
                'number.integer': 'Valor inválido',
                'neighborhood_id.required': 'Campo obrigatório',
                'neighborhood_id.integer': 'Valor inválido',
            })

            if (validation.fails()) {
                return response.json({ success: false, validations: validation.messages() })
            }

            const data = request.only(['street', 'number', 'neighborhood_id', 'complement'])

            data.city_id = 1
            data.user_id = auth.user.id
            data.is_default = total_address.total <= 0 ? true : false

            const address = await UserAddress.create(data)

            return response.json({ success: true, data: address })

        } catch (error) {
            return response.json({ success: false, error: error.message })
        }
    }

    async update({ auth, response, request, params }) {
        try {
            const rules = {
                street: 'required',
                number: 'required|integer',
                neighborhood_id: 'required|integer'
            }

            const validation = await validate(request.all(), rules, {
                'street.required': 'Campo obrigatório',
                'number.required': 'Campo obrigatório',
                'number.integer': 'Valor inválido',
                'neighborhood_id.required': 'Campo obrigatório',
                'neighborhood_id.integer': 'Valor inválido',
            })

            if (validation.fails()) {
                return response.json({ success: false, validations: validation.messages() })
            }

            const data = request.only(['street', 'number', 'neighborhood_id', 'complement'])
            const address = await UserAddress.query()
                                            .where('user_addresses.id', params.id)
                                            .where('user_id', auth.user.id)
                                            .first()

            if (!address) {
                return response.status(404)
            }
    
            address.merge(data)

            await address.save()
    
            return response.json({ success: true })

        } catch (error) {
            return response.json({ success: false, error: error.message })
        }
    }

    async setDefault({ auth, params, response }) {
        await UserAddress
                .query()
                .where('user_id', auth.user.id)
                .update({ 
                    is_default: false
                })
        
        await UserAddress
                    .query()
                    .where({ id: params.id, user_id: auth.user.id })
                    .update({ 
                        is_default: true
                    })
        
        return response.json(true)
    }

}

module.exports = MyAddressController
