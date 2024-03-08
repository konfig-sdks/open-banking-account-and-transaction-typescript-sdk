/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBBalanceType1Code } from './obbalance-type1-code';
import { OBCreditDebitCode2 } from './obcredit-debit-code2';
import { OBReadBalance1DataBalanceInnerAmount } from './obread-balance1-data-balance-inner-amount';
import { OBReadBalance1DataBalanceInnerCreditLineInner } from './obread-balance1-data-balance-inner-credit-line-inner';

/**
 * Set of elements used to define the balance details.
 * @export
 * @interface OBReadBalance1DataBalanceInner
 */
export interface OBReadBalance1DataBalanceInner {
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     * @type {string}
     * @memberof OBReadBalance1DataBalanceInner
     */
    'AccountId': string;
    /**
     * 
     * @type {OBReadBalance1DataBalanceInnerAmount}
     * @memberof OBReadBalance1DataBalanceInner
     */
    'Amount': OBReadBalance1DataBalanceInnerAmount;
    /**
     * Indicates whether the balance is a credit or a debit balance.  Usage: A zero balance is considered to be a credit balance.
     * @type {OBCreditDebitCode2}
     * @memberof OBReadBalance1DataBalanceInner
     */
    'CreditDebitIndicator': OBCreditDebitCode2;
    /**
     * 
     * @type {Array<OBReadBalance1DataBalanceInnerCreditLineInner>}
     * @memberof OBReadBalance1DataBalanceInner
     */
    'CreditLine'?: Array<OBReadBalance1DataBalanceInnerCreditLineInner>;
    /**
     * Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     * @type {string}
     * @memberof OBReadBalance1DataBalanceInner
     */
    'DateTime': string;
    /**
     * Balance type, in a coded form.
     * @type {OBBalanceType1Code}
     * @memberof OBReadBalance1DataBalanceInner
     */
    'Type': OBBalanceType1Code;
}
