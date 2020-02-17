'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { validate } = use('Validator')

const User = use('App/Models/User')
const Role = use('App/Models/Role')

/**
 * Resourceful controller for interacting with users
 */
class UserController {

  async count ({ response }) {
    const users = await User
                        .query()
                        .count('* as total')
                        .first()

    return response.json(users)
  }

  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    const page = request.get().page

    const users = await User
                        .query()
                        .with('roles')
                        .orderBy('users.id', 'desc')
                        .paginate(page)

    return response.json(users)
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ view }) {
    const roles = await Role.pair('name', 'id')
    return view.render('back.pages.users.create', { roles })
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
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
          return response.json({ success: false, validations: validation.messages() })
      }

      const data = request.only(['name', 'email', 'phone', 'document', 'person_type'])

      if (request.input('password')) {
          data.password = request.input('password')
      }

      const user = await User.create(data)
      await user.roles().attach(request.input('role_ids'))

      return response.json({ success: true, data: user })

    } catch (error) {
      return response.json({ success: false, error: error.message })
    }
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const user = await User.find(params.id)
    user.role_ids = await user.roles().ids()

    return response.json(user)
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
			const rules = {
				name: 'required',
        email: `required|email|unique:users,email,id,${params.id}`,
				document: `required|document|unique:users,document,id,${params.id}`,
				person_type: 'required|in:legal,individual'
			}

			const validation = await validate(request.all(), rules, {
				'name.required': 'Campo obrigatório',
				'email.required': 'Campo obrigatório',
				'email.email': 'Informe um email válido',
				'email.unique': 'Esse e-mail já está sendo utilizado',
				'document.required': 'Campo obrigatório',
				'document.unique': 'Esse CPF já está cadastrado',
				'person_type.required': 'Campo obrigatório',
				'person_type.in': 'Tipo de pessoa inválido',
			})

      if (validation.fails()) {
          return response.json({ success: false, validations: validation.messages() })
      }

      const data = request.only(['name', 'email', 'phone', 'document', 'person_type'])

      const user = await User.find(params.id)

      if (request.input('password')) {
          data.password = request.input('password')
      }

      user.merge(data)

      await user.save()
      await user.roles().sync(request.input('role_ids'))

      return response.json({ success: true, data: user })
    } catch(error) {
      return response.json({ success: false, error: error.message })
    }
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
      const user = await User.find(params.id)

      await user.roles().detach()
      await User.find(params.id)
      await user.delete()

      return response.json(true)
  }
}

module.exports = UserController
