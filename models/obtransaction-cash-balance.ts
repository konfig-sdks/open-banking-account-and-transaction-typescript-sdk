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
import { OBTransactionCashBalanceAmount } from './obtransaction-cash-balance-amount';

/**
 * Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
 * @export
 * @interface OBTransactionCashBalance
 */
export interface OBTransactionCashBalance {
    /**
     * 
     * @type {OBTransactionCashBalanceAmount}
     * @memberof OBTransactionCashBalance
     */
    'Amount': OBTransactionCashBalanceAmount;
    /**
     * Indicates whether the balance is a credit or a debit balance.  Usage: A zero balance is considered to be a credit balance.
     * @type {OBCreditDebitCode2}
     * @memberof OBTransactionCashBalance
     */
    'CreditDebitIndicator': OBCreditDebitCode2;
    /**
     * Balance type, in a coded form.
     * @type {OBBalanceType1Code}
     * @memberof OBTransactionCashBalance
     */
    'Type': OBBalanceType1Code;
}
