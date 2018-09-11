const request = require('request');
const promisify = require('fying-promises');

const get = promisify(request.get.bind(request));


module.exports = {
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
};
