<div align="center">

[![Visit Open banking](./header.png)](https://www.openbanking.org.uk&#x2F;)

# [Open banking](https://www.openbanking.org.uk&#x2F;)<a id="open-banking"></a>

Swagger for Account and Transaction API Specification

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`openbankingaccountandtransaction.accountAccess.createConsent`](#openbankingaccountandtransactionaccountaccesscreateconsent)
  * [`openbankingaccountandtransaction.accountAccess.deleteConsent`](#openbankingaccountandtransactionaccountaccessdeleteconsent)
  * [`openbankingaccountandtransaction.accountAccess.getConsent`](#openbankingaccountandtransactionaccountaccessgetconsent)
  * [`openbankingaccountandtransaction.accounts.get`](#openbankingaccountandtransactionaccountsget)
  * [`openbankingaccountandtransaction.accounts.getAll`](#openbankingaccountandtransactionaccountsgetall)
  * [`openbankingaccountandtransaction.balances.get`](#openbankingaccountandtransactionbalancesget)
  * [`openbankingaccountandtransaction.balances.getAll`](#openbankingaccountandtransactionbalancesgetall)
  * [`openbankingaccountandtransaction.beneficiaries.getAll`](#openbankingaccountandtransactionbeneficiariesgetall)
  * [`openbankingaccountandtransaction.beneficiaries.getAll_0`](#openbankingaccountandtransactionbeneficiariesgetall_0)
  * [`openbankingaccountandtransaction.directDebits.getAll`](#openbankingaccountandtransactiondirectdebitsgetall)
  * [`openbankingaccountandtransaction.directDebits.list`](#openbankingaccountandtransactiondirectdebitslist)
  * [`openbankingaccountandtransaction.offers.getById`](#openbankingaccountandtransactionoffersgetbyid)
  * [`openbankingaccountandtransaction.offers.list`](#openbankingaccountandtransactionofferslist)
  * [`openbankingaccountandtransaction.parties.getByAccountId`](#openbankingaccountandtransactionpartiesgetbyaccountid)
  * [`openbankingaccountandtransaction.parties.getList`](#openbankingaccountandtransactionpartiesgetlist)
  * [`openbankingaccountandtransaction.parties.getList_0`](#openbankingaccountandtransactionpartiesgetlist_0)
  * [`openbankingaccountandtransaction.products.getByAccountId`](#openbankingaccountandtransactionproductsgetbyaccountid)
  * [`openbankingaccountandtransaction.products.list`](#openbankingaccountandtransactionproductslist)
  * [`openbankingaccountandtransaction.scheduledPayments.getAll`](#openbankingaccountandtransactionscheduledpaymentsgetall)
  * [`openbankingaccountandtransaction.scheduledPayments.getAll_0`](#openbankingaccountandtransactionscheduledpaymentsgetall_0)
  * [`openbankingaccountandtransaction.standingOrders.get`](#openbankingaccountandtransactionstandingordersget)
  * [`openbankingaccountandtransaction.standingOrders.getAll`](#openbankingaccountandtransactionstandingordersgetall)
  * [`openbankingaccountandtransaction.statements.get`](#openbankingaccountandtransactionstatementsget)
  * [`openbankingaccountandtransaction.statements.getAll`](#openbankingaccountandtransactionstatementsgetall)
  * [`openbankingaccountandtransaction.statements.getDetails`](#openbankingaccountandtransactionstatementsgetdetails)
  * [`openbankingaccountandtransaction.statements.getFile`](#openbankingaccountandtransactionstatementsgetfile)
  * [`openbankingaccountandtransaction.transactions.getDetails`](#openbankingaccountandtransactiontransactionsgetdetails)
  * [`openbankingaccountandtransaction.transactions.getDetails_0`](#openbankingaccountandtransactiontransactionsgetdetails_0)
  * [`openbankingaccountandtransaction.transactions.getDetails_1`](#openbankingaccountandtransactiontransactionsgetdetails_1)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Open%20Banking&%20serviceName=Account%20and%20Transaction%20&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { OpenBankingAccountAndTransaction } from "open-banking-account-and-transaction-typescript-sdk";

const openbankingaccountandtransaction = new OpenBankingAccountAndTransaction({
  // Defining the base path is optional and defaults to https://openbanking.org.uk
  // basePath: "https://openbanking.org.uk",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const createConsentResponse =
  await openbankingaccountandtransaction.accountAccess.createConsent({
    Data: {
      Permissions: ["ReadAccountsBasic"],
    },
    Risk: {},
  });

console.log(createConsentResponse);
```

## Reference<a id="reference"></a>


### `openbankingaccountandtransaction.accountAccess.createConsent`<a id="openbankingaccountandtransactionaccountaccesscreateconsent"></a>

Create Account Access Consents

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createConsentResponse =
  await openbankingaccountandtransaction.accountAccess.createConsent({
    Data: {
      Permissions: ["ReadAccountsBasic"],
    },
    Risk: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Data: [`OBReadConsent1Data`](./models/obread-consent1-data.ts)<a id="data-obreadconsent1datamodelsobread-consent1-datats"></a>

##### Risk: `object`<a id="risk-object"></a>

The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadConsentResponse1](./models/obread-consent-response1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account-access-consents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.accountAccess.deleteConsent`<a id="openbankingaccountandtransactionaccountaccessdeleteconsent"></a>

Delete Account Access Consents

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteConsentResponse =
  await openbankingaccountandtransaction.accountAccess.deleteConsent({
    consentId: "consentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consentId: `string`<a id="consentid-string"></a>

ConsentId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account-access-consents/{ConsentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.accountAccess.getConsent`<a id="openbankingaccountandtransactionaccountaccessgetconsent"></a>

Get Account Access Consents

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getConsentResponse =
  await openbankingaccountandtransaction.accountAccess.getConsent({
    consentId: "consentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consentId: `string`<a id="consentid-string"></a>

ConsentId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadConsentResponse1](./models/obread-consent-response1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account-access-consents/{ConsentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.accounts.get`<a id="openbankingaccountandtransactionaccountsget"></a>

Get Accounts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await openbankingaccountandtransaction.accounts.get({
  accountId: "accountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadAccount6](./models/obread-account6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.accounts.getAll`<a id="openbankingaccountandtransactionaccountsgetall"></a>

Get Accounts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await openbankingaccountandtransaction.accounts.getAll(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadAccount6](./models/obread-account6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.balances.get`<a id="openbankingaccountandtransactionbalancesget"></a>

Get Balances

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await openbankingaccountandtransaction.balances.get({
  accountId: "accountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadBalance1](./models/obread-balance1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/balances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.balances.getAll`<a id="openbankingaccountandtransactionbalancesgetall"></a>

Get Balances

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await openbankingaccountandtransaction.balances.getAll(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadBalance1](./models/obread-balance1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/balances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.beneficiaries.getAll`<a id="openbankingaccountandtransactionbeneficiariesgetall"></a>

Get Beneficiaries

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse =
  await openbankingaccountandtransaction.beneficiaries.getAll({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadBeneficiary5](./models/obread-beneficiary5.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/beneficiaries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.beneficiaries.getAll_0`<a id="openbankingaccountandtransactionbeneficiariesgetall_0"></a>

Get Beneficiaries

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAll_0Response =
  await openbankingaccountandtransaction.beneficiaries.getAll_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadBeneficiary5](./models/obread-beneficiary5.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/beneficiaries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.directDebits.getAll`<a id="openbankingaccountandtransactiondirectdebitsgetall"></a>

Get Direct Debits

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse =
  await openbankingaccountandtransaction.directDebits.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadDirectDebit2](./models/obread-direct-debit2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/direct-debits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.directDebits.list`<a id="openbankingaccountandtransactiondirectdebitslist"></a>

Get Direct Debits

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await openbankingaccountandtransaction.directDebits.list({
  accountId: "accountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadDirectDebit2](./models/obread-direct-debit2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/direct-debits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.offers.getById`<a id="openbankingaccountandtransactionoffersgetbyid"></a>

Get Offers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await openbankingaccountandtransaction.offers.getById({
  accountId: "accountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadOffer1](./models/obread-offer1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/offers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.offers.list`<a id="openbankingaccountandtransactionofferslist"></a>

Get Offers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await openbankingaccountandtransaction.offers.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadOffer1](./models/obread-offer1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/offers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.parties.getByAccountId`<a id="openbankingaccountandtransactionpartiesgetbyaccountid"></a>

Get Parties

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse =
  await openbankingaccountandtransaction.parties.getByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadParty2](./models/obread-party2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/party` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.parties.getList`<a id="openbankingaccountandtransactionpartiesgetlist"></a>

Get Parties

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await openbankingaccountandtransaction.parties.getList({
  accountId: "accountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadParty3](./models/obread-party3.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/parties` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.parties.getList_0`<a id="openbankingaccountandtransactionpartiesgetlist_0"></a>

Get Parties

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getList_0Response =
  await openbankingaccountandtransaction.parties.getList_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadParty2](./models/obread-party2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/party` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.products.getByAccountId`<a id="openbankingaccountandtransactionproductsgetbyaccountid"></a>

Get Products

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse =
  await openbankingaccountandtransaction.products.getByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadProduct2](./models/obread-product2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/product` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.products.list`<a id="openbankingaccountandtransactionproductslist"></a>

Get Products

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await openbankingaccountandtransaction.products.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadProduct2](./models/obread-product2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.scheduledPayments.getAll`<a id="openbankingaccountandtransactionscheduledpaymentsgetall"></a>

Get Scheduled Payments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse =
  await openbankingaccountandtransaction.scheduledPayments.getAll({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadScheduledPayment3](./models/obread-scheduled-payment3.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/scheduled-payments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.scheduledPayments.getAll_0`<a id="openbankingaccountandtransactionscheduledpaymentsgetall_0"></a>

Get Scheduled Payments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAll_0Response =
  await openbankingaccountandtransaction.scheduledPayments.getAll_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadScheduledPayment3](./models/obread-scheduled-payment3.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/scheduled-payments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.standingOrders.get`<a id="openbankingaccountandtransactionstandingordersget"></a>

Get Standing Orders

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await openbankingaccountandtransaction.standingOrders.get({
  accountId: "accountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadStandingOrder6](./models/obread-standing-order6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/standing-orders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.standingOrders.getAll`<a id="openbankingaccountandtransactionstandingordersgetall"></a>

Get Standing Orders

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse =
  await openbankingaccountandtransaction.standingOrders.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadStandingOrder6](./models/obread-standing-order6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/standing-orders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.statements.get`<a id="openbankingaccountandtransactionstatementsget"></a>

Get Statements

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await openbankingaccountandtransaction.statements.get({
  accountId: "accountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

##### fromStatementDateTime: `string`<a id="fromstatementdatetime-string"></a>

The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

##### toStatementDateTime: `string`<a id="tostatementdatetime-string"></a>

The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadStatement2](./models/obread-statement2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/statements` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.statements.getAll`<a id="openbankingaccountandtransactionstatementsgetall"></a>

Get Statements

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await openbankingaccountandtransaction.statements.getAll(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### fromStatementDateTime: `string`<a id="fromstatementdatetime-string"></a>

The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

##### toStatementDateTime: `string`<a id="tostatementdatetime-string"></a>

The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadStatement2](./models/obread-statement2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/statements` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.statements.getDetails`<a id="openbankingaccountandtransactionstatementsgetdetails"></a>

Get Statements

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse =
  await openbankingaccountandtransaction.statements.getDetails({
    statementId: "statementId_example",
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### statementId: `string`<a id="statementid-string"></a>

StatementId

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadStatement2](./models/obread-statement2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/statements/{StatementId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.statements.getFile`<a id="openbankingaccountandtransactionstatementsgetfile"></a>

Get Statements

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileResponse =
  await openbankingaccountandtransaction.statements.getFile({
    statementId: "statementId_example",
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### statementId: `string`<a id="statementid-string"></a>

StatementId

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/statements/{StatementId}/file` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.transactions.getDetails`<a id="openbankingaccountandtransactiontransactionsgetdetails"></a>

Get Transactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse =
  await openbankingaccountandtransaction.transactions.getDetails({
    statementId: "statementId_example",
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### statementId: `string`<a id="statementid-string"></a>

StatementId

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadTransaction6](./models/obread-transaction6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/statements/{StatementId}/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.transactions.getDetails_0`<a id="openbankingaccountandtransactiontransactionsgetdetails_0"></a>

Get Transactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetails_0Response =
  await openbankingaccountandtransaction.transactions.getDetails_0({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

##### fromBookingDateTime: `string`<a id="frombookingdatetime-string"></a>

The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

##### toBookingDateTime: `string`<a id="tobookingdatetime-string"></a>

The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadTransaction6](./models/obread-transaction6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `openbankingaccountandtransaction.transactions.getDetails_1`<a id="openbankingaccountandtransactiontransactionsgetdetails_1"></a>

Get Transactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetails_1Response =
  await openbankingaccountandtransaction.transactions.getDetails_1({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

##### fromBookingDateTime: `string`<a id="frombookingdatetime-string"></a>

The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

##### toBookingDateTime: `string`<a id="tobookingdatetime-string"></a>

The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadTransaction6](./models/obread-transaction6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
