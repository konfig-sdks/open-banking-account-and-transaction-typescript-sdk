/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBFeeFrequency1Code2 } from './obfee-frequency1-code2';
import { OBFeeFrequency1Code3 } from './obfee-frequency1-code3';
import { OBFeeType1Code } from './obfee-type1-code';
import { OBInterestRateType1Code1 } from './obinterest-rate-type1-code1';
import { OBOtherCodeType15 } from './obother-code-type15';
import { OBOtherCodeType16 } from './obother-code-type16';
import { OBOtherCodeType17 } from './obother-code-type17';
import { OBOtherFeeChargeDetailType } from './obother-fee-charge-detail-type';

/**
 * Other fees/charges details
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner {
    /**
     * How frequently the fee/charge is applied to the account
     * @type {OBFeeFrequency1Code2}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'ApplicationFrequency': OBFeeFrequency1Code2;
    /**
     * How frequently the fee/charge is calculated
     * @type {OBFeeFrequency1Code3}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'CalculationFrequency': OBFeeFrequency1Code3;
    /**
     * Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'FeeAmount'?: string;
    /**
     * Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'FeeRate'?: string;
    /**
     * Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)
     * @type {OBInterestRateType1Code1}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'FeeRateType'?: OBInterestRateType1Code1;
    /**
     * Fee/Charge Type
     * @type {OBFeeType1Code}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'FeeType': OBFeeType1Code;
    /**
     * Fee/charge which is usually negotiable rather than a fixed amount
     * @type {boolean}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'NegotiableIndicator'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {OBOtherCodeType16}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'OtherApplicationFrequency'?: OBOtherCodeType16;
    /**
     * 
     * @type {OBOtherCodeType17}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'OtherCalculationFrequency'?: OBOtherCodeType17;
    /**
     * 
     * @type {OBOtherCodeType15}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'OtherFeeRateType'?: OBOtherCodeType15;
    /**
     * 
     * @type {OBOtherFeeChargeDetailType}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeDetailInner
     */
    'OtherFeeType'?: OBOtherFeeChargeDetailType;
}

