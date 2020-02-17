'use strict'

class StoreProduct {

    get rules() {
        return {
            'name': 'required',
            'price': 'required',
            'description': 'required',
            'image': 'required'
        }
    }

    get messages() {
        return {
            'name.required': 'Esse campo é obrigatório',
            'price.required': 'Esse campo é obrigatório',
            'description.required': 'Esse campo é obrigatório',
            'image.required': 'Seleciona uma imagem',
        }
    }

}

module.exports = StoreProduct