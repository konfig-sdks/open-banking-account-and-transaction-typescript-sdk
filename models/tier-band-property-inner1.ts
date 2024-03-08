/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OtherApplicationFrequencyProperty } from './other-application-frequency-property';
import { OtherBankInterestTypeProperty } from './other-bank-interest-type-property';
import { OtherCalculationFrequencyProperty } from './other-calculation-frequency-property';

/**
 * Tier Band Details
 * @export
 * @interface TierBandPropertyInner1
 */
export interface TierBandPropertyInner1 {
    /**
     * The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.   Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A
     * @type {string}
     * @memberof TierBandPropertyInner1
     */
    'AER': string;
    /**
     * How often is interest applied to the PCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer\'s PCA.
     * @type {string}
     * @memberof TierBandPropertyInner1
     */
    'ApplicationFrequency': TierBandPropertyInner1ApplicationFrequencyEnum;
    /**
     * Bank Interest for the PCA product
     * @type {string}
     * @memberof TierBandPropertyInner1
     */
    'BankInterestRate'?: string;
    /**
     * Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the PCA.
     * @type {string}
     * @memberof TierBandPropertyInner1
     */
    'BankInterestRateType'?: TierBandPropertyInner1BankInterestRateTypeEnum;
    /**
     * How often is credit interest calculated for the account.
     * @type {string}
     * @memberof TierBandPropertyInner1
     */
    'CalculationFrequency'?: TierBandPropertyInner1CalculationFrequencyEnum;
    /**
     * Amount on which Interest applied.
     * @type {string}
     * @memberof TierBandPropertyInner1
     */
    'DepositInterestAppliedCoverage'?: TierBandPropertyInner1DepositInterestAppliedCoverageEnum;
    /**
     * Type of interest rate, Fixed or Variable
     * @type {string}
     * @memberof TierBandPropertyInner1
     */
    'FixedVariableInterestRateType': TierBandPropertyInner1FixedVariableInterestRateTypeEnum;
    /**
     * Unique and unambiguous identification of a  Tier Band for a PCA.
     * @type {string}
     * @memberof TierBandPropertyInner1
     */
    'Identification'?: string;
    /**
     * Optional additional notes to supplement the Tier Band details
     * @type {Array<string>}
     * @memberof TierBandPropertyInner1
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {OtherApplicationFrequencyProperty}
     * @memberof TierBandPropertyInner1
     */
    'OtherApplicationFrequency'?: OtherApplicationFrequencyProperty;
    /**
     * 
     * @type {OtherBankInterestTypeProperty}
     * @memberof TierBandPropertyInner1
     */
    'OtherBankInterestType'?: OtherBankInterestTypeProperty;
    /**
     * 
     * @type {OtherCalculationFrequencyProperty}
     * @memberof TierBandPropertyInner1
     */
    'OtherCalculationFrequency'?: OtherCalculationFrequencyProperty;
    /**
     * Maximum deposit value for which the credit interest tier applies.
     * @type {string}
     * @memberof TierBandPropertyInner1
     */
    'TierValueMaximum'?: string;
    /**
     * Minimum deposit value for which the credit interest tier applies.
     * @type {string}
     * @memberof TierBandPropertyInner1
     */
    'TierValueMinimum': string;
}

type TierBandPropertyInner1ApplicationFrequencyEnum = 'PerAcademicTerm' | 'Daily' | 'HalfYearly' | 'Monthly' | 'Other' | 'Quarterly' | 'PerStatementDate' | 'Weekly' | 'Yearly'
type TierBandPropertyInner1BankInterestRateTypeEnum = 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other'
type TierBandPropertyInner1CalculationFrequencyEnum = 'PerAcademicTerm' | 'Daily' | 'HalfYearly' | 'Monthly' | 'Other' | 'Quarterly' | 'PerStatementDate' | 'Weekly' | 'Yearly'
type TierBandPropertyInner1DepositInterestAppliedCoverageEnum = 'Tiered' | 'Whole'
type TierBandPropertyInner1FixedVariableInterestRateTypeEnum = 'Fixed' | 'Variable'


