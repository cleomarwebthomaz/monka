const axios = require('axios')

module.exports = async function(message) {

    const push = {
        sound: 'default',
        ...message
    }

    const { data } = await axios.post('https://exp.host/--/api/v2/push/send', push);

    return data;
}

// const message = {
//     to: 'ExponentPushToken[i8-2ZjCuRvWVhzPzV--6Bf]',
//     sound: 'default',
//     title: 'Original Title',
//     body: 'And here is the body!',
//     data: { data: 'goes here' },
//   };