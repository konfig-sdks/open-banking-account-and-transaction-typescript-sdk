/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeCapInner } from './obread-product2-data-product-inner-other-product-type-other-fees-charges-inner-fee-charge-cap-inner';
import { OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner } from './obread-product2-data-product-inner-other-product-type-other-fees-charges-inner-fee-charge-detail-inner';
import { OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerOtherTariffType } from './obread-product2-data-product-inner-other-product-type-other-fees-charges-inner-other-tariff-type';

/**
 * Contains details of fees and charges which are not associated with either Overdraft or features/benefits
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner {
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeCapInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner
     */
    'FeeChargeCap'?: Array<OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeCapInner>;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner
     */
    'FeeChargeDetail': Array<OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner>;
    /**
     * 
     * @type {OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerOtherTariffType}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner
     */
    'OtherTariffType'?: OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerOtherTariffType;
    /**
     * Name of the tariff
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner
     */
    'TariffName'?: string;
    /**
     * TariffType which defines the fee and charges.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner
     */
    'TariffType'?: OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerTariffTypeEnum;
}

type OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerTariffTypeEnum = 'TTEL' | 'TTMX' | 'TTOT'

