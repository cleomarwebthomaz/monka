'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')

class LoginController {

	async store({ request, auth, response }) {
		try {
			
			const rules = {
				email: 'required|email',
				password: 'required'
			}

			const validation = await validate(request.all(), rules, {
				'email.required': 'Campo obrigatório',
				'email.email': 'Informe um email válido',
				'password.required': 'Campo obrigatório',
			})

			if (validation.fails()) {
				return response.json({
					success: false,
					error: validation.messages()
				})
			}

			const { email, password } = request.all()

			const userAuth = await auth
								.withRefreshToken()
								.attempt(email, password)

			const user = await User.findBy('email', email)

			return response.json({
				success: true,
				data: user,
				token: userAuth.token
			})

		} catch (error) {
			return response.json({ success: false, error: error.message })
		}		
	}

}

module.exports = LoginController
