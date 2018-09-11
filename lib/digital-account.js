const request = require('request');
const promisify = require('fying-promises');


const post = promisify(request.post.bind(request));


module.exports = {
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
};
