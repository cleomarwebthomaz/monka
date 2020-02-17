'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')
const moment = require('moment')

class RecoverPasswordController {

    async store ({ request, response }) {
      try {
          const tokenProvided = request.token // retrieving token in URL

          const { email, token, password } = request.all();

          // looking for user with the registered email
          const user = await User.find('token', token)
      
          if (!user) {
              return response.json({ error: 'Token antigo fornecido ou já usado' })
          }

          // checking if token is still the same
          // just to make sure that the user is not using an old link
          // after requesting the password recovery again
          const sameToken = token === user.token
      
          if (!sameToken) {
              return response.json({ error: 'Token antigo fornecido ou já usado' })
          }
      
          // checking if token is still valid (48 hour period)
          const tokenExpired = moment()
            .subtract(2, 'days')
            .isAfter(user.token_created_at)
      
          if (tokenExpired) {
            return response.json({ error: 'Token expirado. Solicite um novo token.' })
          }
      
          // saving new password
          user.password = password
      
          // deleting current token
          user.token = null
          user.token_created_at = 0
      
          // persisting data (saving)
          await user.save()

          return response.json(true)
      } catch(error) {
        return response.json(error.message)
      }

    }

}

module.exports = RecoverPasswordController
