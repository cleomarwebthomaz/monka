'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class RegisterController {

    async store({ response, auth, request }) {
        try {
			const rules = {
				name: 'required',
				email: 'required|email|unique:users,email',
				password: 'required',
				document: 'required|document|unique:users,document',
				person_type: 'required|in:legal,individual'
			}

			const validation = await validate(request.all(), rules, {
				'name.required': 'Campo obrigatório',
				'email.required': 'Campo obrigatório',
				'email.email': 'Informe um email válido',
				'email.unique': 'Esse e-mail já está sendo utilizado',
				'password.required': 'Campo obrigatório',
				'document.required': 'Campo obrigatório',
				'document.unique': 'Esse CPF já está cadastrado',
				'person_type.required': 'Campo obrigatório',
				'person_type.in': 'Tipo de pessoa inválido',
			})

			if (validation.fails()) {
				return response.json({ success: false, errorValidation: true, error: validation.messages() })
			}

			const data = request.only(['name', 'email', 'password', 'person_type', 'document'])

			const user = await User.create(data)

			const userAuth = await auth.withRefreshToken().attempt(data.email, data.password)

			return response.json({
				success: true,
				user,
				token: userAuth.token
			})
	
        } catch (error) {
            return response.json(error.message)
        }
    }

}

module.exports = RegisterController
