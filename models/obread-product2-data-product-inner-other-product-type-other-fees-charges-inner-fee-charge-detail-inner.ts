/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBFeeCategory1Code } from './obfee-category1-code';
import { OBFeeFrequency1Code2 } from './obfee-frequency1-code2';
import { OBFeeFrequency1Code3 } from './obfee-frequency1-code3';
import { OBFeeType1Code } from './obfee-type1-code';
import { OBInterestRateType1Code1 } from './obinterest-rate-type1-code1';
import { OBOtherCodeType10 } from './obother-code-type10';
import { OBOtherCodeType16 } from './obother-code-type16';
import { OBOtherCodeType17 } from './obother-code-type17';
import { OBOtherCodeType18 } from './obother-code-type18';
import { OBOtherFeeChargeDetailType } from './obother-fee-charge-detail-type';
import { OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeCapInner } from './obread-product2-data-product-inner-other-product-type-other-fees-charges-inner-fee-charge-cap-inner';
import { OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInnerFeeApplicableRange } from './obread-product2-data-product-inner-other-product-type-other-fees-charges-inner-fee-charge-detail-inner-fee-applicable-range';

/**
 * Other fees/charges details
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner {
    /**
     * How frequently the fee/charge is applied to the account
     * @type {OBFeeFrequency1Code2}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'ApplicationFrequency': OBFeeFrequency1Code2;
    /**
     * How frequently the fee/charge is calculated
     * @type {OBFeeFrequency1Code3}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'CalculationFrequency'?: OBFeeFrequency1Code3;
    /**
     * Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'FeeAmount'?: string;
    /**
     * 
     * @type {OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInnerFeeApplicableRange}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'FeeApplicableRange'?: OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInnerFeeApplicableRange;
    /**
     * Categorisation of fees and charges into standard categories.
     * @type {OBFeeCategory1Code}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'FeeCategory': OBFeeCategory1Code;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeCapInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'FeeChargeCap'?: Array<OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeCapInner>;
    /**
     * Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'FeeRate'?: string;
    /**
     * Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)
     * @type {OBInterestRateType1Code1}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'FeeRateType'?: OBInterestRateType1Code1;
    /**
     * Fee/Charge Type
     * @type {OBFeeType1Code}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'FeeType': OBFeeType1Code;
    /**
     * Fee/charge which is usually negotiable rather than a fixed amount
     * @type {boolean}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'NegotiableIndicator'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {OBOtherCodeType16}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'OtherApplicationFrequency'?: OBOtherCodeType16;
    /**
     * 
     * @type {OBOtherCodeType17}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'OtherCalculationFrequency'?: OBOtherCodeType17;
    /**
     * 
     * @type {OBOtherCodeType10}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'OtherFeeCategoryType'?: OBOtherCodeType10;
    /**
     * 
     * @type {OBOtherCodeType18}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'OtherFeeRateType'?: OBOtherCodeType18;
    /**
     * 
     * @type {OBOtherFeeChargeDetailType}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner
     */
    'OtherFeeType'?: OBOtherFeeChargeDetailType;
}

