'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Role = use('App/Models/Role')
const Permission = use('Adonis/Acl/Permission')

/**
 * Resourceful controller for interacting with roles
 */
class RoleController {

  /**
   * Show a list of all roles.
   * GET roles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    const roles = await Role
                        .query()
                        .sortable(request)
                        .with(['permissions'])
                        .paginate()

    return response.json(roles)
  }

  async all ({ response }) {
    const roles = await Role.all()
    return response.json(roles)
  }

  /**
   * Create/save a new role.
   * POST roles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['name', 'slug'])
    const role = await Role.create(data)

    return response.json(role)
  }

  /**
   * Display a single role.
   * GET roles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update role details.
   * PUT or PATCH roles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, session }) {
    const data = request.only(['name', 'slug', 'description'])

    const role = await Role.findOrFail(params.id)

    role.merge(data)

    await role.permissions().sync(request.input('permissions'))
    await role.save()

    return response.json(role)
  }

  /**
   * Delete a role with id.
   * DELETE roles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const role = await Role.findOrFail(params.id)
    await role.delete()

    return response.json(true)
  }
}

module.exports = RoleController
