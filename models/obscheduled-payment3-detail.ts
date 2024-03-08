/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBActiveOrHistoricCurrencyAndAmount1 } from './obactive-or-historic-currency-and-amount1';
import { OBBranchAndFinancialInstitutionIdentification51 } from './obbranch-and-financial-institution-identification51';
import { OBCashAccount51 } from './obcash-account51';
import { OBExternalScheduleType1Code } from './obexternal-schedule-type1-code';

/**
 * 
 * @export
 * @interface OBScheduledPayment3Detail
 */
export interface OBScheduledPayment3Detail {
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     * @type {string}
     * @memberof OBScheduledPayment3Detail
     */
    'AccountId': string;
    /**
     * 
     * @type {OBCashAccount51}
     * @memberof OBScheduledPayment3Detail
     */
    'CreditorAccount': OBCashAccount51;
    /**
     * 
     * @type {OBBranchAndFinancialInstitutionIdentification51}
     * @memberof OBScheduledPayment3Detail
     */
    'CreditorAgent'?: OBBranchAndFinancialInstitutionIdentification51;
    /**
     * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
     * @type {string}
     * @memberof OBScheduledPayment3Detail
     */
    'DebtorReference'?: string;
    /**
     * 
     * @type {OBActiveOrHistoricCurrencyAndAmount1}
     * @memberof OBScheduledPayment3Detail
     */
    'InstructedAmount': OBActiveOrHistoricCurrencyAndAmount1;
    /**
     * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor\'s reference or payment remittance identification should be quoted in the end-to-end transaction identification.
     * @type {string}
     * @memberof OBScheduledPayment3Detail
     */
    'Reference'?: string;
    /**
     * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     * @type {string}
     * @memberof OBScheduledPayment3Detail
     */
    'ScheduledPaymentDateTime': string;
    /**
     * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
     * @type {string}
     * @memberof OBScheduledPayment3Detail
     */
    'ScheduledPaymentId'?: string;
    /**
     * Specifies the scheduled payment date type requested
     * @type {OBExternalScheduleType1Code}
     * @memberof OBScheduledPayment3Detail
     */
    'ScheduledType': OBExternalScheduleType1Code;
}

