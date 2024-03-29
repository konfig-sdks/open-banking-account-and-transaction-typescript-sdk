/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBReadDirectDebit2DataDirectDebitInner } from './obread-direct-debit2-data-direct-debit-inner';

/**
 * 
 * @export
 * @interface OBReadDirectDebit2Data
 */
export interface OBReadDirectDebit2Data {
    /**
     * 
     * @type {Array<OBReadDirectDebit2DataDirectDebitInner>}
     * @memberof OBReadDirectDebit2Data
     */
    'DirectDebit'?: Array<OBReadDirectDebit2DataDirectDebitInner>;
}

