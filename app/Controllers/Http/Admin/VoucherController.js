'use strict'

const { validateAll } = use('Validator')
const Voucher = use('App/Models/Voucher')

class VoucherController {

  async index ({ response }) {
    const vouchers = await Voucher
                                .query()
                                .orderBy('id', 'desc')
                                .orderBy('vouchers.id', 'desc')
                                .fetch()

    return response.json(vouchers)
  }

  async store ({ request, response }) {
    try {
        let rules = {
            user_id: 'integer|exists:users,id',
            name: 'required',
            code: 'required|unique:vouchers,code',
            limit: 'integer',
            limit_by_user: 'integer',
            discount_value: 'required|number',
            free_shipping: 'boolean',
            active: 'boolean',
            date_start: 'date|required',
            date_end: 'date|required',
        }

        const validation = await validateAll(request.all(), rules, {
            'user_id.integer': 'Valor inválido',
            'user_id.exists': 'Usuário inválido',
            'name.required': 'Campo obrigatório',
            'code.required': 'Campo obrigatório',
            'code.unique': 'Já existe um voucher cadastrado com esse código',
            'limit.integer': 'Informe um valor númerico',
            'limit_by_user.integer': 'Informe um valor númerico',
            'discount_value.required': 'Campo obrigatório',
            'discount_value.number': 'Informe um valor númerico',
            'free_shipping.boolean': 'Valor inválido',
            'active.boolean': 'Valor inválido',
            'date_start.date': 'Valor inválido',
            'date_start.required': 'Campo obrigatório',
            'date_end.date': 'Valor inválido',
            'date_start.required': 'Campo obrigatório',
        })

        if (validation.fails()) {
            return response.json({ success: false, validations: validation.messages() })
        }

        const data = request.only(['user_id', 'name', 'description', 'code', 'limit', 'limit_by_user', 'discount_type', 'discount_value', 'used', 'free_shipping', 'visible', 'date_start', 'date_end', 'active'])

        const voucher = await Voucher.create(data)

        return response.json({ success: true, data: voucher })
    } catch (error) {
      return response.json({ success: false, error: error.message })
    }      
  }

  async show ({ params, response }) {
    const voucher = await Voucher.findOrFail(params.id)
    return response.json(voucher)
  }

  async update ({ params, request, response }) {
    try {
        let rules = {
            user_id: 'integer|exists:users,id',
            name: 'required',
            code: `required|unique:vouchers,code,id,${params.id}`,
            limit: 'integer',
            limit_by_user: 'integer',
            discount_value: 'required|number',
            free_shipping: 'boolean',
            active: 'boolean',
            date_start: 'date|required',
            date_end: 'date|required',
        }

        const validation = await validateAll(request.all(), rules, {
            'user_id.integer': 'Valor inválido',
            'user_id.exists': 'Usuário inválido',
            'name.required': 'Campo obrigatório',
            'code.required': 'Campo obrigatório',
            'code.unique': 'Já existe um voucher cadastrado com esse código',
            'limit.integer': 'Informe um valor númerico',
            'limit_by_user.integer': 'Informe um valor númerico',
            'discount_value.required': 'Campo obrigatório',
            'discount_value.number': 'Informe um valor númerico',
            'free_shipping.boolean': 'Valor inválido',
            'active.boolean': 'Valor inválido',
            'date_start.date': 'Valor inválido',
            'date_start.required': 'Campo obrigatório',
            'date_end.date': 'Valor inválido',
            'date_start.required': 'Campo obrigatório',
        })

      if (validation.fails()) {
          return response.json({ success: false, validations: validation.messages() })
      }

      const data = request.only(['user_id', 'name', 'description', 'code', 'limit', 'limit_by_user', 'discount_type', 'discount_value', 'used', 'free_shipping', 'visible', 'date_start', 'date_end', 'active'])

      const voucher = await Voucher.findOrFail(params.id)

      voucher.merge(data)

      await voucher.save()

      return response.json({ success: true, data: voucher })
      
    } catch (error) {
      return response.json({ success: false, error: error.message })
    }    
  }

  async destroy ({ params }) {
    const voucher = await Voucher.findOrFail(params.id)
    await Voucher.delete()
  }

}

module.exports = VoucherController
