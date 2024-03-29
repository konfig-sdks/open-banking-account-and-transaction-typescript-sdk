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
import { OBReadStandingOrder6Data } from './obread-standing-order6-data';

/**
 * 
 * @export
 * @interface OBReadStandingOrder6
 */
export interface OBReadStandingOrder6 {
    /**
     * 
     * @type {OBReadStandingOrder6Data}
     * @memberof OBReadStandingOrder6
     */
    'Data': OBReadStandingOrder6Data;
    /**
     * 
     * @type {Links}
     * @memberof OBReadStandingOrder6
     */
    'Links'?: Links;
    /**
     * 
     * @type {Meta}
     * @memberof OBReadStandingOrder6
     */
    'Meta'?: Meta;
}

