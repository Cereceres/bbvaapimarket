const request = require('request');
const promisify = require('fying-promises');


const post = promisify(request.post.bind(request));


module.exports = {
    create: (vehicle, token) => post({
        baseUrl: 'https://apis.bbvabancomer.com/loans/v1',
        uri: '/vehicles',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        },
        json: vehicle
    })
        .then(([ { body } ]) => body)
};
