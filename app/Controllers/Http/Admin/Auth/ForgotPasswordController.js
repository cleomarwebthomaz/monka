'use strict'

class ForgotPasswordController {

    async index({ view }) {
        return view.render('back.auth.forgot_password')
    }

    async store({ response, session }) {
        try {

            const { email, password } = request.all()

            return { email, password }
            
        } catch (error) {
            session.flash({ error: 'Verifique seu email e senha' })
            return response.redirect('back')
        }
    }

}

module.exports = ForgotPasswordController
