'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')

const axios = require('axios')

class LoginController {
	
	async facebook({ request, response, auth }) {
		try {
			const { token } = request.all()

			const { data } = await axios.get(`https://graph.facebook.com/me?access_token=${token}&fields=email,name`);

			const userData = await User.findOrCreate({ email: data.email })

			const user = await User.findBy('email', userData.email)

			const userAuth = await auth.generate(user)

			if (!user.document) {
				user.completed_register = false
			}

			return response.json({
				success: true,
				user,
				token: userAuth.token
			})

		} catch (error) {
			return response.json({ success: false, error: error.message })
		}
	}

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

			const userAuth = await auth.withRefreshToken().attempt(email, password)

			const user = await User.findBy('email', email)

			return response.json({
				success: true,
				user,
				token: userAuth.token
			})

		} catch (error) {
			return response.json({ success: false, error: error.message })
		}		
	}

}

module.exports = LoginController
