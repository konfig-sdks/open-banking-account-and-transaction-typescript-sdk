/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner } from './obread-product2-data-product-inner-other-product-type-repayment-repayment-fee-charges-repayment-fee-charge-cap-inner';
import { OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailInner } from './obread-product2-data-product-inner-other-product-type-repayment-repayment-fee-charges-repayment-fee-charge-detail-inner';

/**
 * Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment.
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeCharges
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeCharges {
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeCharges
     */
    'RepaymentFeeChargeCap'?: Array<OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner>;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeCharges
     */
    'RepaymentFeeChargeDetail': Array<OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailInner>;
}
