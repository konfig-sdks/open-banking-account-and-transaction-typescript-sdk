/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OtherApplicationFrequencyProperty } from './other-application-frequency-property';
import { OtherCalculationFrequencyProperty } from './other-calculation-frequency-property';
import { OtherFeeRateTypeProperty1 } from './other-fee-rate-type-property1';
import { OtherFeeTypeProperty1 } from './other-fee-type-property1';
import { OverdraftFeeChargeCapPropertyInner } from './overdraft-fee-charge-cap-property-inner';

/**
 * Details about the fees/charges
 * @export
 * @interface OverdraftFeeChargeDetailPropertyInner
 */
export interface OverdraftFeeChargeDetailPropertyInner {
    /**
     * Frequency at which the overdraft charge is applied to the account
     * @type {string}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'ApplicationFrequency': OverdraftFeeChargeDetailPropertyInnerApplicationFrequencyEnum;
    /**
     * How often is the overdraft fee/charge calculated for the account.
     * @type {string}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'CalculationFrequency'?: OverdraftFeeChargeDetailPropertyInnerCalculationFrequencyEnum;
    /**
     * Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)
     * @type {string}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'FeeAmount'?: string;
    /**
     * Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)
     * @type {string}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'FeeRate'?: string;
    /**
     * Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)
     * @type {string}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'FeeRateType'?: OverdraftFeeChargeDetailPropertyInnerFeeRateTypeEnum;
    /**
     * Overdraft fee type
     * @type {string}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'FeeType': OverdraftFeeChargeDetailPropertyInnerFeeTypeEnum;
    /**
     * Every additional tranche of an overdraft balance to which an overdraft fee is applied
     * @type {string}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'IncrementalBorrowingAmount'?: string;
    /**
     * Indicates whether fee and charges are negotiable
     * @type {boolean}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'NegotiableIndicator'?: boolean;
    /**
     * Free text for capturing any other info related to Overdraft Fees Charge Details
     * @type {Array<string>}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {OtherApplicationFrequencyProperty}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'OtherApplicationFrequency'?: OtherApplicationFrequencyProperty;
    /**
     * 
     * @type {OtherCalculationFrequencyProperty}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'OtherCalculationFrequency'?: OtherCalculationFrequencyProperty;
    /**
     * 
     * @type {OtherFeeRateTypeProperty1}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'OtherFeeRateType'?: OtherFeeRateTypeProperty1;
    /**
     * 
     * @type {OtherFeeTypeProperty1}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'OtherFeeType'?: OtherFeeTypeProperty1;
    /**
     * Indicates if the fee/charge is already covered by an \'Overdraft Control\' fee or not.
     * @type {boolean}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'OverdraftControlIndicator'?: boolean;
    /**
     * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
     * @type {Array<OverdraftFeeChargeCapPropertyInner>}
     * @memberof OverdraftFeeChargeDetailPropertyInner
     */
    'OverdraftFeeChargeCap'?: Array<OverdraftFeeChargeCapPropertyInner>;
}

type OverdraftFeeChargeDetailPropertyInnerApplicationFrequencyEnum = 'OnClosing' | 'OnOpening' | 'ChargingPeriod' | 'Daily' | 'PerItem' | 'Monthly' | 'OnAnniversary' | 'Other' | 'PerHundredPounds' | 'PerHour' | 'PerOccurrence' | 'PerSheet' | 'PerTransaction' | 'PerTransactionAmount' | 'PerTransactionPercentage' | 'Quarterly' | 'SixMonthly' | 'StatementMonthly' | 'Weekly' | 'Yearly'
type OverdraftFeeChargeDetailPropertyInnerCalculationFrequencyEnum = 'OnClosing' | 'OnOpening' | 'ChargingPeriod' | 'Daily' | 'PerItem' | 'Monthly' | 'OnAnniversary' | 'Other' | 'PerHundredPounds' | 'PerHour' | 'PerOccurrence' | 'PerSheet' | 'PerTransaction' | 'PerTransactionAmount' | 'PerTransactionPercentage' | 'Quarterly' | 'SixMonthly' | 'StatementMonthly' | 'Weekly' | 'Yearly'
type OverdraftFeeChargeDetailPropertyInnerFeeRateTypeEnum = 'Gross' | 'Other'
type OverdraftFeeChargeDetailPropertyInnerFeeTypeEnum = 'ArrangedOverdraft' | 'AnnualReview' | 'EmergencyBorrowing' | 'BorrowingItem' | 'OverdraftRenewal' | 'OverdraftSetup' | 'Surcharge' | 'TempOverdraft' | 'UnauthorisedBorrowing' | 'UnauthorisedPaidTrans' | 'Other' | 'UnauthorisedUnpaidTrans'

