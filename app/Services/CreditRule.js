const moment = require('moment')

const CreditRule = use('App/Models/CreditRule')

class CreditRuleService {

    static async getCurrent() {
        const creditRule = await CreditRule
                                        .query()
                                        .where('active', true)
                                        // .where('date_start', '>=', moment().format('YYYY-MM-DD') )
                                        // .where('date_end', '<=', moment().format('YYYY-MM-DD') )
                                        .first()

                                        console.log( 'date_start', '>=', new Date() )



        return creditRule
    }
}

module.exports = CreditRuleService