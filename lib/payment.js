const request = require('request');
const promisify = require('fying-promises');

const get = promisify(request.get.bind(request));
const post = promisify(request.post.bind(request));
const remove = promisify(request.delete.bind(request));


module.exports = {
    createMeInternalTransfer:(transfer, token) => post({
        baseUrl: 'https://apis.bbva.com/payments/v1',
        uri: '/me/internal-transfers',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        json: transfer
    })
        .then(([ { body } ]) => body),
    createMeTransfer:(transfer, token) => post({
        baseUrl: 'https://apis.bbva.com/payments/v1',
        uri: '/me/transfers',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        json: transfer
    })
        .then(([ { body } ]) => body),
    getMeTransfers:(qs, token) => get({
        baseUrl: 'https://apis.bbva.com/payments/v1',
        uri: '/me/transfers',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        qs
    })
        .then(([ { body } ]) => body),
    createMeTransferSimulation:(transfer, token) => post({
        baseUrl: 'https://apis.bbva.com/payments/v1',
        uri: '/me/transfer-simulations',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        json: transfer
    })
        .then(([ { body } ]) => body),
    createMeTransferOrders:(order, token) => post({
        baseUrl: 'https://apis.bbva.com/payments/v1',
        uri: '/me/transfer-orders',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        json: order
    })
        .then(([ { body } ]) => body),
    getMeTransferOrders:(qs, token) => get({
        baseUrl: 'https://apis.bbva.com/payments/v1',
        uri: '/me/transfer-orders',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        qs
    })
        .then(([ { body } ]) => body),
    deleteMeTransferOrders:(transferorderid, token) => remove({
        baseUrl: 'https://apis.bbva.com/payments/v1',
        uri: `/me/transfer-orders${ transferorderid }` ? `/${transferorderid}` : '',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    createMobileCash:(cash, token) => post({
        baseUrl: 'https://apis.bbva.com/payments/v1',
        uri: '/me/mobile-cash',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        json: cash
    })
        .then(([ { body } ]) => body),
    getAtms:(qs, token) => get({
        baseUrl: 'https://apis.bbva.com/payments/v1',
        uri: '/atms',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        qs
    })
        .then(([ { body } ]) => body)
};
