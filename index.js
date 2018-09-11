const request = require('request');
const promisify = require('fying-promises');

const card = require('./lib/card');
const account = require('./lib/account');
const customer = require('./lib/customer');
const loan = require('./lib/loan');
const digitalAccount = require('./lib/digital-account');

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
    digitalAccount: {...digitalAccount},
    loan: {...loan},
    customer:{...customer},
    account: {...account},
    card: {...card}
};
