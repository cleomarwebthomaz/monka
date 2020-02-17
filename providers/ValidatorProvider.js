'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

const cpf = require('../validations/cpf')
const cnpj = require('../validations/cnpj')
const exists = require('../validations/exists')

class ValidatorProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    //
  }

  document(data, field, message, args, get) {
    return new Promise((resolve,reject) => {
      const value = get(data, field)

      if (value.length <= 14) {
        const cpfValid = cpf(value);
        if (!cpfValid) {
          return reject('CPF inválido')
        }

        return resolve()
      }

      const cnpjValid = cnpj(value);
      if (!cnpjValid) {
        return reject('CNPJ inválido')
      }
      
      return resolve()
    })
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    const Validator = use('Validator')

    Validator.extend('cpf', cpf.bind(this))
    Validator.extend('exists', exists.bind(this))
    Validator.extend('cnpj', cnpj.bind(this))
    Validator.extend('document', this.document.bind(this))
  }
}

module.exports = ValidatorProvider
