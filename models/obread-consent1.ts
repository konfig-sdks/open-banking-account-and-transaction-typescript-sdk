/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBReadConsent1Data } from './obread-consent1-data';

/**
 * 
 * @export
 * @interface OBReadConsent1
 */
export interface OBReadConsent1 {
    /**
     * 
     * @type {OBReadConsent1Data}
     * @memberof OBReadConsent1
     */
    'Data': OBReadConsent1Data;
    /**
     * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.
     * @type {object}
     * @memberof OBReadConsent1
     */
    'Risk': object;
}

