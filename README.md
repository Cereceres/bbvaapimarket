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
    },
    customer:{
        getMeBasic(token) => Promise,
        getMeFull(token) => Promise,
        getContractsBasic(token) => Promise,
        getContractsFull(token) => Promise,
        getSpanishDni(token) => Promise,
        getDniMetadata(token) => Promise
    },
    account: {
        getMeAccount(token) => Promise,
        getAccountDetails(token, accountid) => Promise,
        getAccountTransactions(token, accountid) => Promise
    },
    card: {
        getMeCard(token) => Promise,
        getMeCardDetails(token, cardId) => Promise,
        getCardTransactions(token, cardId) => Promise
    },
    payment:{
        createMeInternalTransfer(transfer, token) => Promise,
        createMeTransfer(transfer, token) => Promise,
        getMeTransfers(qs, token) => Promise,
        createMeTransferSimulation(transfer, token) => Promise,
        createMeTransferOrders(order, token) => Promise,
        getMeTransferOrders(qs, token) => Promise,
        deleteMeTransferOrders(transferorderid, token) => Promise,
        createMobileCash(cash, token) => Promise,
        getAtms(qs, token) => Promise
    }
}

```


