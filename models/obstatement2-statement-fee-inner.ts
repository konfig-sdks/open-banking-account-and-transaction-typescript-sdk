/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBActiveOrHistoricCurrencyAndAmount6 } from './obactive-or-historic-currency-and-amount6';
import { OBCreditDebitCode0 } from './obcredit-debit-code0';

/**
 * Set of elements used to provide details of a fee for the statement resource.
 * @export
 * @interface OBStatement2StatementFeeInner
 */
export interface OBStatement2StatementFeeInner {
    /**
     * 
     * @type {OBActiveOrHistoricCurrencyAndAmount6}
     * @memberof OBStatement2StatementFeeInner
     */
    'Amount': OBActiveOrHistoricCurrencyAndAmount6;
    /**
     * Indicates whether the amount is a credit or a debit.  Usage: A zero amount is considered to be a credit amount.
     * @type {OBCreditDebitCode0}
     * @memberof OBStatement2StatementFeeInner
     */
    'CreditDebitIndicator': OBCreditDebitCode0;
    /**
     * Description that may be available for the statement fee.
     * @type {string}
     * @memberof OBStatement2StatementFeeInner
     */
    'Description'?: string;
    /**
     * How frequently the fee is applied to the Account.
     * @type {string}
     * @memberof OBStatement2StatementFeeInner
     */
    'Frequency'?: string;
    /**
     * Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)
     * @type {number}
     * @memberof OBStatement2StatementFeeInner
     */
    'Rate'?: number;
    /**
     * Description that may be available for the statement fee rate type.
     * @type {string}
     * @memberof OBStatement2StatementFeeInner
     */
    'RateType'?: string;
    /**
     * Fee type, in a coded form.
     * @type {string}
     * @memberof OBStatement2StatementFeeInner
     */
    'Type': string;
}

