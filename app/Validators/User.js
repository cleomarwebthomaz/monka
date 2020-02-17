'use strict'

class User {

    get rules() {
        const userId = this.ctx.params.id

        let validate = {
            name: 'required',
            email: `required|email|unique:users,email,id,${userId || ''}`,
        }

        if (!userId) {
            validate.password = 'required|min:5'
        }

        return validate
    }

    get messages() {
        return {
            'name.required': 'Esse campo é obrigatório',
            'email.required': 'Você deve fornecer um endereço de email.',
            'email.email': 'Você deve fornecer um endereço de email válido.',
            'email.unique': 'Este e-mail já está registado.',
            'password.required': 'Você deve fornecer uma senha',
            'password.min': 'A senha deve ter mais de 5 caracteres'
        }
    }

}

module.exports = User