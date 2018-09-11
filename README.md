# bbvaapimarket
bbvaapimarket api client

# Documentation

Please read the doc in:

[Api products](https://www.bbvaapimarket.com/products?country=bbva-mexico)

[Authentication](https://www.bbvaapimarket.com/how-it-works/api-calls)


# API
export a object
```js
{
    auth(appID = '', secretOAuth) => Promise,

    authThreeLegged(code = '', redirect_uri) => Promise,
    digitalAccount: {
        create(account, token, digitalAccountsOtp) => Promise
    },

    loan: {
        create(vehicle, token, digitalAccountsOtp) => Promise
    }
}

```


