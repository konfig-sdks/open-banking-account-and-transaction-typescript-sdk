/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBPartyRelationships1Account } from './obparty-relationships1-account';

/**
 * The Party\'s relationships with other resources.
 * @export
 * @interface OBPartyRelationships1
 */
export interface OBPartyRelationships1 {
    /**
     * 
     * @type {OBPartyRelationships1Account}
     * @memberof OBPartyRelationships1
     */
    'Account'?: OBPartyRelationships1Account;
}
