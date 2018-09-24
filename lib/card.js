const request = require('request');
const promisify = require('fying-promises');

const get = promisify(request.get.bind(request));


module.exports = {
    getMeCard: (token = process.env.BBVA_TOKEN) => get({
        baseUrl: 'https://apis.bbva.com/cards/v2',
        uri: '/me/cards',
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getMeCardDetails: (token = process.env.BBVA_TOKEN, cardId) => get({
        baseUrl: 'https://apis.bbva.com/cards/v2',
        uri: `/me/accounts${cardId ? `/${cardId}` : ''}`,
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body),
    getCardTransactions:(token = process.env.BBVA_TOKEN, cardId) => get({
        baseUrl: 'https://apis.bbva.com/accounts/v1',
        uri: `/me/accounts${cardId ? `/${cardId}` : ''}/transactions`,
        headers: {
            'Authorization': `jwt ${ token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(([ { body } ]) => body)
};
