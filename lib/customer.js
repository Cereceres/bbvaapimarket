const request = require('request');
const promisify = require('fying-promises');

const get = promisify(request.get.bind(request));


module.exports = {
    getMeBasic:(token = process.env.BBVA_TOKEN) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me-basic',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getMeFull:(token = process.env.BBVA_TOKEN) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me-full',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getContractsBasic:(token = process.env.BBVA_TOKEN) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me/globalposition-basic',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getContractsFull:(token = process.env.BBVA_TOKEN) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me/globalposition-full',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getSpanishDni:(token = process.env.BBVA_TOKEN) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me/documents/dni',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getDniMetadata:(token = process.env.BBVA_TOKEN) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me/documents/dni-meta',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body)
};
