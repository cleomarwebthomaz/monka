var https = require('https')
const Env = use('Env')


function Push() {
    /**
     * Object
        'field' => 'tag',
        'key' => 'is_vip',
        'relation' => '!=',
        'value' => 'true',
    ]
    */
    filters = [];

    return {
        addFilter: function({ key, value, field = 'tag', relation = '=' }) {
            filters.push({ key, value, field, relation })
            return this
        },

        send: function(text) {

            var message = { 
                app_id: Env.get('ONE_SIGNAL_APP_ID'),
                contents: {"en": text},
                included_segments: ["All"],
                filters
            };
            
            var headers = {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Basic ${Env.get('ONE_SIGNAL_API_KEY')}`
            };
            
            var options = {
                host: "onesignal.com",
                port: 443,
                path: "/api/v1/notifications",
                method: "POST",
                headers: headers
            };
            
            var req = https.request(options, function(res) {  
                res.on('data', function(message) {
                    console.log("Response:");
                    console.log(JSON.parse(message));
                });
            });
            
            req.on('error', function(e) {
                console.log("ERROR:");
                console.log(e);
            });
            
            req.write(JSON.stringify(message));
            req.end();
        }
    }

}

module.exports = Push
