<div align="center">

[![Visit Open banking](./header.png)](https://openbanking.org.uk)

# [Open banking](https://openbanking.org.uk)<a id="open-banking"></a>

Swagger for Account and Transaction API Specification

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`openbanking.accountAccess.createConsent`](#openbankingaccountaccesscreateconsent)
  * [`openbanking.accountAccess.deleteConsent`](#openbankingaccountaccessdeleteconsent)
  * [`openbanking.accountAccess.getConsent`](#openbankingaccountaccessgetconsent)
  * [`openbanking.accounts.get`](#openbankingaccountsget)
  * [`openbanking.accounts.getAll`](#openbankingaccountsgetall)
  * [`openbanking.balances.get`](#openbankingbalancesget)
  * [`openbanking.balances.getAll`](#openbankingbalancesgetall)
  * [`openbanking.beneficiaries.getAll`](#openbankingbeneficiariesgetall)
  * [`openbanking.beneficiaries.getAll_0`](#openbankingbeneficiariesgetall_0)
  * [`openbanking.directDebits.getAll`](#openbankingdirectdebitsgetall)
  * [`openbanking.directDebits.list`](#openbankingdirectdebitslist)
  * [`openbanking.offers.getById`](#openbankingoffersgetbyid)
  * [`openbanking.offers.list`](#openbankingofferslist)
  * [`openbanking.parties.getByAccountId`](#openbankingpartiesgetbyaccountid)
  * [`openbanking.parties.getList`](#openbankingpartiesgetlist)
  * [`openbanking.parties.getList_0`](#openbankingpartiesgetlist_0)
  * [`openbanking.products.getByAccountId`](#openbankingproductsgetbyaccountid)
  * [`openbanking.products.list`](#openbankingproductslist)
  * [`openbanking.scheduledPayments.getAll`](#openbankingscheduledpaymentsgetall)
  * [`openbanking.scheduledPayments.getAll_0`](#openbankingscheduledpaymentsgetall_0)
  * [`openbanking.standingOrders.get`](#openbankingstandingordersget)
  * [`openbanking.standingOrders.getAll`](#openbankingstandingordersgetall)
  * [`openbanking.statements.get`](#openbankingstatementsget)
  * [`openbanking.statements.getAll`](#openbankingstatementsgetall)
  * [`openbanking.statements.getDetails`](#openbankingstatementsgetdetails)
  * [`openbanking.statements.getFile`](#openbankingstatementsgetfile)
  * [`openbanking.transactions.getDetails`](#openbankingtransactionsgetdetails)
  * [`openbanking.transactions.getDetails_0`](#openbankingtransactionsgetdetails_0)
  * [`openbanking.transactions.getDetails_1`](#openbankingtransactionsgetdetails_1)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Open%20Banking&serviceName=Account%20and%20Transaction&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { OpenBanking } from "open-banking-account-and-transaction-typescript-sdk";

const openbanking = new OpenBanking({
  // Defining the base path is optional and defaults to https://openbanking.org.uk
  // basePath: "https://openbanking.org.uk",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const createConsentResponse = await openbanking.accountAccess.createConsent({
  Data: {
    Permissions: ["ReadAccountsBasic"],
  },
  Risk: {},
});

console.log(createConsentResponse);
```

## Reference<a id="reference"></a>


### `openbanking.accountAccess.createConsent`<a id="openbankingaccountaccesscreateconsent"></a>

Create Account Access Consents

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createConsentResponse = await openbanking.accountAccess.createConsent({
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


### `openbanking.accountAccess.deleteConsent`<a id="openbankingaccountaccessdeleteconsent"></a>

Delete Account Access Consents

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteConsentResponse = await openbanking.accountAccess.deleteConsent({
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


### `openbanking.accountAccess.getConsent`<a id="openbankingaccountaccessgetconsent"></a>

Get Account Access Consents

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getConsentResponse = await openbanking.accountAccess.getConsent({
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


### `openbanking.accounts.get`<a id="openbankingaccountsget"></a>

Get Accounts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await openbanking.accounts.get({
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


### `openbanking.accounts.getAll`<a id="openbankingaccountsgetall"></a>

Get Accounts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await openbanking.accounts.getAll({});
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


### `openbanking.balances.get`<a id="openbankingbalancesget"></a>

Get Balances

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await openbanking.balances.get({
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


### `openbanking.balances.getAll`<a id="openbankingbalancesgetall"></a>

Get Balances

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await openbanking.balances.getAll({});
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


### `openbanking.beneficiaries.getAll`<a id="openbankingbeneficiariesgetall"></a>

Get Beneficiaries

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await openbanking.beneficiaries.getAll({
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


### `openbanking.beneficiaries.getAll_0`<a id="openbankingbeneficiariesgetall_0"></a>

Get Beneficiaries

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAll_0Response = await openbanking.beneficiaries.getAll_0({});
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


### `openbanking.directDebits.getAll`<a id="openbankingdirectdebitsgetall"></a>

Get Direct Debits

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await openbanking.directDebits.getAll({});
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


### `openbanking.directDebits.list`<a id="openbankingdirectdebitslist"></a>

Get Direct Debits

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await openbanking.directDebits.list({
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


### `openbanking.offers.getById`<a id="openbankingoffersgetbyid"></a>

Get Offers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await openbanking.offers.getById({
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


### `openbanking.offers.list`<a id="openbankingofferslist"></a>

Get Offers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await openbanking.offers.list({});
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


### `openbanking.parties.getByAccountId`<a id="openbankingpartiesgetbyaccountid"></a>

Get Parties

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse = await openbanking.parties.getByAccountId({
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


### `openbanking.parties.getList`<a id="openbankingpartiesgetlist"></a>

Get Parties

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await openbanking.parties.getList({
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


### `openbanking.parties.getList_0`<a id="openbankingpartiesgetlist_0"></a>

Get Parties

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getList_0Response = await openbanking.parties.getList_0({});
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


### `openbanking.products.getByAccountId`<a id="openbankingproductsgetbyaccountid"></a>

Get Products

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse = await openbanking.products.getByAccountId({
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


### `openbanking.products.list`<a id="openbankingproductslist"></a>

Get Products

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await openbanking.products.list({});
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


### `openbanking.scheduledPayments.getAll`<a id="openbankingscheduledpaymentsgetall"></a>

Get Scheduled Payments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await openbanking.scheduledPayments.getAll({
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


### `openbanking.scheduledPayments.getAll_0`<a id="openbankingscheduledpaymentsgetall_0"></a>

Get Scheduled Payments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAll_0Response = await openbanking.scheduledPayments.getAll_0({});
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


### `openbanking.standingOrders.get`<a id="openbankingstandingordersget"></a>

Get Standing Orders

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await openbanking.standingOrders.get({
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


### `openbanking.standingOrders.getAll`<a id="openbankingstandingordersgetall"></a>

Get Standing Orders

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await openbanking.standingOrders.getAll({});
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


### `openbanking.statements.get`<a id="openbankingstatementsget"></a>

Get Statements

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await openbanking.statements.get({
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


### `openbanking.statements.getAll`<a id="openbankingstatementsgetall"></a>

Get Statements

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await openbanking.statements.getAll({});
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


### `openbanking.statements.getDetails`<a id="openbankingstatementsgetdetails"></a>

Get Statements

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await openbanking.statements.getDetails({
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


### `openbanking.statements.getFile`<a id="openbankingstatementsgetfile"></a>

Get Statements

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileResponse = await openbanking.statements.getFile({
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


### `openbanking.transactions.getDetails`<a id="openbankingtransactionsgetdetails"></a>

Get Transactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await openbanking.transactions.getDetails({
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


### `openbanking.transactions.getDetails_0`<a id="openbankingtransactionsgetdetails_0"></a>

Get Transactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetails_0Response = await openbanking.transactions.getDetails_0({
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


### `openbanking.transactions.getDetails_1`<a id="openbankingtransactionsgetdetails_1"></a>

Get Transactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetails_1Response = await openbanking.transactions.getDetails_1({});
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
