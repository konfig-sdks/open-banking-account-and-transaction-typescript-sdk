/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBMinMaxType1Code } from './obmin-max-type1-code';
import { OBPeriod1Code } from './obperiod1-code';
import { OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerOtherFeeTypeInner } from './obread-product2-data-product-inner-other-product-type-loan-interest-loan-interest-tier-band-set-inner-loan-interest-fees-charges-inner-loan-interest-fee-charge-cap-inner-other-fee-type-inner';

/**
 * RepaymentFeeChargeCap sets daily, weekly, monthly, yearly limits on the fees that are charged
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner {
    /**
     * Period e.g. day, week, month etc. for which the fee/charge is capped
     * @type {OBPeriod1Code}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'CappingPeriod'?: OBPeriod1Code;
    /**
     * Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'FeeCapAmount'?: string;
    /**
     * fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount
     * @type {number}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'FeeCapOccurrence'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'FeeType': Array<OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInnerFeeTypeEnum>;
    /**
     * Min Max type
     * @type {OBMinMaxType1Code}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'MinMaxType': OBMinMaxType1Code;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerOtherFeeTypeInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'OtherFeeType'?: Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerOtherFeeTypeInner>;
}

type OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInnerFeeTypeEnum = 'FEPF' | 'FTOT' | 'FYAF' | 'FYAM' | 'FYAQ' | 'FYCP' | 'FYDB' | 'FYMI' | 'FYXX'


