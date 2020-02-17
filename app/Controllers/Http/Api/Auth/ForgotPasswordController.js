'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')
const crypto = require('crypto')

class ForgotPasswordController {

    async store ({ request, response }) {
        try {
          // account request password recovery
          const { email, isMobile } = request.only(['email', 'isMobile'])

          // checking if email is registered
          const user = await User.findByOrFail('email', email)
          
          // generating token
          const token = await crypto.randomBytes(10).toString('hex')

          // registering when token was created and saving token
          user.token_created_at = new Date()
          user.token = token
    
          // persisting data (saving)
          await user.save()

          // const template = isMobile ? 'emails.recover_mobile' : 'emails.recover'
          
          const template = 'emails.recover'

          await Mail.send(template, { user, token }, message => {
            message
              .from('dev@webthomaz.com.br')
              .to(email)
              .subject(`Monka - Recuperar de Senha`)
          })
    
          return response.json({ success: true, data: user })

        } catch (err) {
          return response.json({ success: false, data: err.message })
        }
      }
}

module.exports = ForgotPasswordController
