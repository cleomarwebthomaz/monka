const Helpers = use('Helpers')
const uniqid = require('uniqid')

const Upload = function(request) {

    self = this

    self.request = request

    self.size = '2mb'

    self.path = '/uploads/'

    self.overwrite = true

    self.extensions = ['image']

    return {

        overwrite(overwrite) {
            self.overwrite = overwrite

            return this
        },

        ext(extensions) {
            self.options.types = extensions

            return this
        },

        maxSize(size) {
            self.size = size

            return this
        },

        types(types) {
            self.types = types

            return this
        },

        path(path) {
            self.path = path

            return this
        },

        async upload(field, oldValue = null) {
            return await this.save(field, oldValue)
        },

        getRandName(_ext) {
            return uniqid() + '.' + _ext
        },

        async save(field, oldValue) {
            return new Promise(async (resolve, reject) => {
                try {

                    const uploadFile = request.file(field)

                    const name = oldValue ? oldValue : this.getRandName(uploadFile.extname)

                    if (!uploadFile) {
                        return resolve(oldValue)
                    }

                    await uploadFile.move(Helpers.tmpPath(self.path), {
                        name,
                        overwrite: self.overwrite
                    })

                    if (!uploadFile.moved()) {
                        return reject(uploadFile.error())
                    }

                    resolve(name)
                } catch (error) {
                    reject(error)
                }
            })
        }

    }

}

module.exports = Upload
