const request = require('request');
const promisify = require('fying-promises');

const get = promisify(request.get.bind(request));


module.exports = {
    getMeBasic:(token) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me-basic',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getMeFull:(token) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me-full',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getContractsBasic:(token) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me/globalposition-basic',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getContractsFull:(token) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me/globalposition-full',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getSpanishDni:(token) => get({
        baseUrl: 'https://apis.bbva.com/customers/v1',
        uri: '/me/documents/dni',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getDniMetadata:(token) => get({
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
