/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInner } from './obread-product2-data-product-inner-other-product-type-credit-interest-tier-band-set-inner';

/**
 * Details about the interest that may be payable to the Account holders
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeCreditInterest
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeCreditInterest {
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeCreditInterest
     */
    'TierBandSet': Array<OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInner>;
}

