const request = require('request');
const promisify = require('fying-promises');


const post = promisify(request.post.bind(request));
const get = promisify(request.get.bind(request));


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
        .then(([ { body } ]) => body),
    getPreApproved: (token = process.env.BBVA_TOKEN) => get({
        baseUrl: 'https://apis.bbvabancomer.com/loans/v1',
        uri: '/me/pre-approved',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        }
    })
        .then(([ { body } ]) => body),
    createPreApprovedSimulation: (simulation, token) => post({
        baseUrl: 'https://apis.bbvabancomer.com/loans/v1',
        uri: '/me/pre-approved',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        },
        json: simulation
    })
        .then(([ { body } ]) => body)
};
