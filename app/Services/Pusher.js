var Pusher = require('pusher')

var pusher = new Pusher({
    appId: '929486',
    key: 'fb5de6a6f7b0911af408',
    secret: '082a5e54f63701d6e831',
    cluster: 'us2',
    encrypted: true
})

module.exports = pusher