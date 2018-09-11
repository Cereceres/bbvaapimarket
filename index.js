const request = require('request');
const promisify = require('fying-promises');

const card = require('./lib/card');

const post = promisify(request.post.bind(request));
const get = promisify(request.get.bind(request));

const base64 = (string) => Buffer.from(string).toString('base64');

const baseUrlAuth = 'https://connect.bbva.com';

module.exports = {
    auth: (appID = '', secretOAuth) => post({
        qs: {
            grant_type: 'client_credentials'
        },
        baseUrl: baseUrlAuth,
        uri: '/token',
        headers: {
            'Authorization': `Basic ${
                secretOAuth ? base64(`${appID}: ${ secretOAuth}`) : appID
            }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),

    authThreeLegged: (code = '', redirect_uri) => post({
        qs: {
            grant_type: 'authorization_code',
            redirect_uri,
            code
        },
        baseUrl: baseUrlAuth,
        uri: '/token',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    digitalAccount: {
        create: (account, token, digitalAccountsOtp) => post({
            baseUrl: 'https://apis.bbvabancomer.com/accounts/v1',
            uri: '/accounts',
            headers: {
                'Authorization': `jwt ${ token }`,
                'Content-Type': 'application/json',
                'digitalAccounts-otp': digitalAccountsOtp,
                'Accept': 'application/json'

            },
            json: account
        })
            .then(([ { body } ]) => body)
    },

    loan: {
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
    },
    customer:{
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
    },
    account: {
        getMeAccount:(token) => get({
            baseUrl: 'https://apis.bbva.com/accounts/v1',
            uri: '/me/accounts',
            headers: {
                'Authorization': `jwt ${ token }`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(([ { body } ]) => body),
        getAccountDetails:(token, accountid) => get({
            baseUrl: 'https://apis.bbva.com/accounts/v1',
            uri: `/me/accounts${accountid ? `/${accountid}` : ''}`,
            headers: {
                'Authorization': `jwt ${ token }`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(([ { body } ]) => body),
        getAccountTransactions:(token, accountid) => get({
            baseUrl: 'https://apis.bbva.com/accounts/v1',
            uri: `/me/accounts${accountid ? `/${accountid}` : ''}/transactions`,
            headers: {
                'Authorization': `jwt ${ token }`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(([ { body } ]) => body)
    },
    card: {...card}
};
