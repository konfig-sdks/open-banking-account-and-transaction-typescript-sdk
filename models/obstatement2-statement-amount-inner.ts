/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBActiveOrHistoricCurrencyAndAmount8 } from './obactive-or-historic-currency-and-amount8';
import { OBCreditDebitCode0 } from './obcredit-debit-code0';

/**
 * Set of elements used to provide details of a generic amount for the statement resource.
 * @export
 * @interface OBStatement2StatementAmountInner
 */
export interface OBStatement2StatementAmountInner {
    /**
     * 
     * @type {OBActiveOrHistoricCurrencyAndAmount8}
     * @memberof OBStatement2StatementAmountInner
     */
    'Amount': OBActiveOrHistoricCurrencyAndAmount8;
    /**
     * Indicates whether the amount is a credit or a debit.  Usage: A zero amount is considered to be a credit amount.
     * @type {OBCreditDebitCode0}
     * @memberof OBStatement2StatementAmountInner
     */
    'CreditDebitIndicator': OBCreditDebitCode0;
    /**
     * Amount type, in a coded form.
     * @type {string}
     * @memberof OBStatement2StatementAmountInner
     */
    'Type': string;
}

