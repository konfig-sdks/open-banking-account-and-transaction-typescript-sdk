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
import { OBReadConsentResponse1Data } from './obread-consent-response1-data';

/**
 * 
 * @export
 * @interface OBReadConsentResponse1
 */
export interface OBReadConsentResponse1 {
    /**
     * 
     * @type {OBReadConsentResponse1Data}
     * @memberof OBReadConsentResponse1
     */
    'Data': OBReadConsentResponse1Data;
    /**
     * 
     * @type {Links}
     * @memberof OBReadConsentResponse1
     */
    'Links'?: Links;
    /**
     * 
     * @type {Meta}
     * @memberof OBReadConsentResponse1
     */
    'Meta'?: Meta;
    /**
     * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.
     * @type {object}
     * @memberof OBReadConsentResponse1
     */
    'Risk': object;
}

