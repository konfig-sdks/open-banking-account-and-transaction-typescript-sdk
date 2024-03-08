/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Links } from './links';
import { Meta } from './meta';
import { OBReadBeneficiary5Data } from './obread-beneficiary5-data';

/**
 * 
 * @export
 * @interface OBReadBeneficiary5
 */
export interface OBReadBeneficiary5 {
    /**
     * 
     * @type {OBReadBeneficiary5Data}
     * @memberof OBReadBeneficiary5
     */
    'Data': OBReadBeneficiary5Data;
    /**
     * 
     * @type {Links}
     * @memberof OBReadBeneficiary5
     */
    'Links'?: Links;
    /**
     * 
     * @type {Meta}
     * @memberof OBReadBeneficiary5
     */
    'Meta'?: Meta;
}
