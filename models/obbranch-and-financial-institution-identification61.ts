/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBPostalAddress6 } from './obpostal-address6';

/**
 * Financial institution servicing an account for the creditor.
 * @export
 * @interface OBBranchAndFinancialInstitutionIdentification61
 */
export interface OBBranchAndFinancialInstitutionIdentification61 {
    /**
     * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
     * @type {string}
     * @memberof OBBranchAndFinancialInstitutionIdentification61
     */
    'Identification'?: string;
    /**
     * Name by which an agent is known and which is usually used to identify that agent.
     * @type {string}
     * @memberof OBBranchAndFinancialInstitutionIdentification61
     */
    'Name'?: string;
    /**
     * 
     * @type {OBPostalAddress6}
     * @memberof OBBranchAndFinancialInstitutionIdentification61
     */
    'PostalAddress'?: OBPostalAddress6;
    /**
     * Name of the identification scheme, in a coded form as published in an external list.
     * @type {string}
     * @memberof OBBranchAndFinancialInstitutionIdentification61
     */
    'SchemeName'?: string;
}

