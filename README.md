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
        create(vehicle, token, digitalAccountsOtp) => Promise,
        getPreApproved(token = process.env.BBVA_TOKEN) => Promise,
        createPreApprovedSimulation(simulation, token) => Promise
    },
    customer:{
        getMeBasic(token = process.env.BBVA_TOKEN) => Promise,
        getMeFull(token = process.env.BBVA_TOKEN) => Promise,
        getContractsBasic(token = process.env.BBVA_TOKEN) => Promise,
        getContractsFull(token = process.env.BBVA_TOKEN) => Promise,
        getSpanishDni(token = process.env.BBVA_TOKEN) => Promise,
        getDniMetadata(token = process.env.BBVA_TOKEN) => Promise
    },
    account: {
        getMeAccount(token = process.env.BBVA_TOKEN) => Promise,
        getAccountDetails(token = process.env.BBVA_TOKEN, accountid) => Promise,
        getAccountTransactions(token = process.env.BBVA_TOKEN, accountid) => Promise
    },
    card: {
        getMeCard(token = process.env.BBVA_TOKEN) => Promise,
        getMeCardDetails(token = process.env.BBVA_TOKEN, cardId) => Promise,
        getCardTransactions(token = process.env.BBVA_TOKEN, cardId) => Promise
    },
    payment:{
        createMeInternalTransfer(transfer, token) => Promise,
        createMeTransfer(transfer, token) => Promise,
        getMeTransfers(queryObject, token) => Promise,
        createMeTransferSimulation(transfer, token) => Promise,
        createMeTransferOrders(order, token) => Promise,
        getMeTransferOrders(queryObject, token) => Promise,
        deleteMeTransferOrders(transferorderid, token) => Promise,
        createMobileCash(cash, token) => Promise,
        getAtms(queryObject, token) => Promise
    }
}

```


