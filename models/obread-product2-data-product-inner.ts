/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBBCAData1 } from './obbcadata1';
import { OBPCAData1 } from './obpcadata1';
import { OBReadProduct2DataProductInnerOtherProductType } from './obread-product2-data-product-inner-other-product-type';

/**
 * Product details associated with the Account
 * @export
 * @interface OBReadProduct2DataProductInner
 */
export interface OBReadProduct2DataProductInner {
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     * @type {string}
     * @memberof OBReadProduct2DataProductInner
     */
    'AccountId': string;
    /**
     * 
     * @type {OBBCAData1}
     * @memberof OBReadProduct2DataProductInner
     */
    'BCA'?: OBBCAData1;
    /**
     * Unique and unambiguous identification of a  Product Marketing State.
     * @type {string}
     * @memberof OBReadProduct2DataProductInner
     */
    'MarketingStateId'?: string;
    /**
     * 
     * @type {OBReadProduct2DataProductInnerOtherProductType}
     * @memberof OBReadProduct2DataProductInner
     */
    'OtherProductType'?: OBReadProduct2DataProductInnerOtherProductType;
    /**
     * 
     * @type {OBPCAData1}
     * @memberof OBReadProduct2DataProductInner
     */
    'PCA'?: OBPCAData1;
    /**
     * The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers.
     * @type {string}
     * @memberof OBReadProduct2DataProductInner
     */
    'ProductId'?: string;
    /**
     * The name of the Product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.
     * @type {string}
     * @memberof OBReadProduct2DataProductInner
     */
    'ProductName'?: string;
    /**
     * Product type : Personal Current Account, Business Current Account
     * @type {string}
     * @memberof OBReadProduct2DataProductInner
     */
    'ProductType': OBReadProduct2DataProductInnerProductTypeEnum;
    /**
     * Any secondary Identification which  supports Product Identifier to uniquely identify the current account banking products.
     * @type {string}
     * @memberof OBReadProduct2DataProductInner
     */
    'SecondaryProductId'?: string;
}

type OBReadProduct2DataProductInnerProductTypeEnum = 'BusinessCurrentAccount' | 'CommercialCreditCard' | 'Other' | 'PersonalCurrentAccount' | 'SMELoan'

