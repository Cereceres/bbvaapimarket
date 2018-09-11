const request = require('request');
const promisify = require('fying-promises');

const post = promisify(request.get.bind(request));

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
            'Content-Type': 'application/json'
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
            'Content-Type': 'application/json'
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
                'digitalAccounts-otp': digitalAccountsOtp
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
                'Content-Type': 'application/json'
            },
            json: vehicle
        })
            .then(([ { body } ]) => body)
    }


};
