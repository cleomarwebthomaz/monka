'use strict'

const { validateAll } = use('Validator')
const CreditRule = use('App/Models/CreditRule')

class CreditRuleController {

  async index ({ response }) {
    const creditRules = await CreditRule
                                  .query()
                                  .orderBy('id', 'desc')
                                  .orderBy('credit_rules.id', 'desc')
                                  .fetch()

    return response.json(creditRules)
  }

  async store ({ request, response }) {
    try {
        let rules = {
            name: 'required',
            total_orders: 'required|integer',
        }

        const validation = await validate(request.all(), rules)
        if (validation.fails()) {
            return response.json({ success: false, validations: validation.messages() })
        }

        const data = request.only(['name', 'date_start', 'date_end', 'total_orders', 'active'])

        const creditRule = await CreditRule.create(data)

        return response.json({ success: true, data: creditRule })
    } catch (error) {
      return response.json({ success: false, error: error.message })
    }      
  }

  async show ({ params, response }) {
    const creditRule = await CreditRule.findOrFail(params.id)
    return response.json(creditRule)
  }

  async update ({ params, request, response }) {
    try {
      let rules = {
          name: 'required',
          total_orders: 'required|integer',
      }

      const validation = await validateAll(request.all(), rules)
      if (validation.fails()) {
          return response.json({ success: false, validations: validation.messages() })
      }

      const data = request.only(['name', 'date_start', 'date_end', 'total_orders', 'active'])

      const creditRule = await CreditRule.findOrFail(params.id)

      creditRule.merge(data)

      await creditRule.save()

      return response.json({ success: true, data: creditRule })
      
    } catch (error) {
      return response.json({ success: false, error: error.message })
    }    
  }

  async destroy ({ params }) {
    const creditRule = await CreditRule.findOrFail(params.id)
    await creditRule.delete()
  }

}

module.exports = CreditRuleController
