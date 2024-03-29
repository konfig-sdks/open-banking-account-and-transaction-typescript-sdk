/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBFeeFrequency1Code4 } from './obfee-frequency1-code4';
import { OBMinMaxType1Code } from './obmin-max-type1-code';
import { OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerOtherFeeTypeInner } from './obread-product2-data-product-inner-other-product-type-loan-interest-loan-interest-tier-band-set-inner-loan-interest-fees-charges-inner-loan-interest-fee-charge-cap-inner-other-fee-type-inner';

/**
 * Details about any caps (minimum/maximum charges) that apply to a particular fee/charge
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner {
    /**
     * Period e.g. day, week, month etc. for which the fee/charge is capped
     * @type {OBFeeFrequency1Code4}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner
     */
    'CappingPeriod'?: OBFeeFrequency1Code4;
    /**
     * Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner
     */
    'FeeCapAmount'?: string;
    /**
     * fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount
     * @type {number}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner
     */
    'FeeCapOccurrence'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner
     */
    'FeeType': Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerFeeTypeEnum>;
    /**
     * Min Max type
     * @type {OBMinMaxType1Code}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner
     */
    'MinMaxType': OBMinMaxType1Code;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerOtherFeeTypeInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner
     */
    'OtherFeeType'?: Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerOtherFeeTypeInner>;
}

type OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerFeeTypeEnum = 'FEPF' | 'FTOT' | 'FYAF' | 'FYAM' | 'FYAQ' | 'FYCP' | 'FYDB' | 'FYMI' | 'FYXX'


