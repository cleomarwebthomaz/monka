'use strict'

const { validate } = use('Validator')

const User = use('App/Models/User')

class ProfileController {

    async changePassword({ auth, response, request }) {
        const rules = {
            'password': 'required|min:4',
            'confirm_password': 'required|min:4',
        }

        const validation = await validate(request.all(), rules, {
            'password.required': 'Campo obrigatório',
            'password.min': 'Digite uma senha com mais de 4 caracteres',
            'confirm_password.required': 'Campo obrigatório',
            'confirm_password.min': 'Digite uma senha com mais de 4 caracteres',
        })

        if (validation.fails()) {
            return response.json({ success: false, validations: validation.messages() })
        }

        const data = request.only(['password', 'confirm_password'])
        const user = await User.find(auth.user.id)

        await user.save(data)

        return response.json({ success: true })        
    }

    async update({ auth, response, request}) {
        try {
            const rules = {
                name: 'required',
                email: `required|email|unique:users,email,id,${auth.user.id}`,
                password: 'min:4',
                document: `required|document|unique:users,document,id,${auth.user.id}`,
                person_type: 'required|in:legal,individual'
            }

            const validation = await validate(request.all(), rules, {
                'name.required': 'Campo obrigatório',
                'email.required': 'Campo obrigatório',
                'email.email': 'Informe um email válido',
                'email.unique': 'Esse e-mail já está sendo utilizado',
                'password.min': 'Digite uma senha com mais de 4 digitos',
                'document.required': 'Campo obrigatório',
                'document.unique': 'Esse CPF já está cadastrado',
                'person_type.required': 'Campo obrigatório',
                'person_type.in': 'Tipo de pessoa inválido',
            })

            if (validation.fails()) {
                return response.json({ success: false, validations: validation.messages() })
            }

            const data = request.only(['name', 'email', 'document', 'phone', 'password', 'person_type'])
            const user = await User.find(auth.user.id)
            user.completed_register = true
    
            if (request.input('password')) {
                data.password = request.input('password')
            }

            user.merge(data)
    
            await user.save(data)
    
            return response.json({ success: true, user })

        } catch (error) {
            return response.json({ success: false, error: error.message })
        }
    }

    async setPushToken({ request, auth }) {
        return await User.query().where('id', auth.user.id).update({ push_token: request.input('token') })
    }

}

module.exports = ProfileController
