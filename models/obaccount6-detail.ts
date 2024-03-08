/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBAccount4AccountInner } from './obaccount4-account-inner';
import { OBAccountStatus1Code } from './obaccount-status1-code';
import { OBBranchAndFinancialInstitutionIdentification50 } from './obbranch-and-financial-institution-identification50';
import { OBExternalAccountSubType1Code } from './obexternal-account-sub-type1-code';
import { OBExternalAccountType1Code } from './obexternal-account-type1-code';

/**
 * Unambiguous identification of the account to which credit and debit entries are made.
 * @export
 * @interface OBAccount6Detail
 */
export interface OBAccount6Detail {
    /**
     * 
     * @type {Array<OBAccount4AccountInner>}
     * @memberof OBAccount6Detail
     */
    'Account': Array<OBAccount4AccountInner>;
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     * @type {string}
     * @memberof OBAccount6Detail
     */
    'AccountId': string;
    /**
     * Specifies the sub type of account (product family group).
     * @type {OBExternalAccountSubType1Code}
     * @memberof OBAccount6Detail
     */
    'AccountSubType': OBExternalAccountSubType1Code;
    /**
     * Specifies the type of account (personal or business).
     * @type {OBExternalAccountType1Code}
     * @memberof OBAccount6Detail
     */
    'AccountType': OBExternalAccountType1Code;
    /**
     * Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.
     * @type {string}
     * @memberof OBAccount6Detail
     */
    'Currency': string;
    /**
     * Specifies the description of the account type.
     * @type {string}
     * @memberof OBAccount6Detail
     */
    'Description'?: string;
    /**
     * Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     * @type {string}
     * @memberof OBAccount6Detail
     */
    'MaturityDate'?: string;
    /**
     * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
     * @type {string}
     * @memberof OBAccount6Detail
     */
    'Nickname'?: string;
    /**
     * Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     * @type {string}
     * @memberof OBAccount6Detail
     */
    'OpeningDate'?: string;
    /**
     * 
     * @type {OBBranchAndFinancialInstitutionIdentification50}
     * @memberof OBAccount6Detail
     */
    'Servicer'?: OBBranchAndFinancialInstitutionIdentification50;
    /**
     * Specifies the status of account resource in code form.
     * @type {OBAccountStatus1Code}
     * @memberof OBAccount6Detail
     */
    'Status'?: OBAccountStatus1Code;
    /**
     * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     * @type {string}
     * @memberof OBAccount6Detail
     */
    'StatusUpdateDateTime'?: string;
    /**
     * Specifies the switch status for the account, in a coded form.
     * @type {string}
     * @memberof OBAccount6Detail
     */
    'SwitchStatus'?: string;
}

