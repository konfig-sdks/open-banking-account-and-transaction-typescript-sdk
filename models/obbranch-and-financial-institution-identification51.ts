/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account. This is the servicer of the beneficiary account.
 * @export
 * @interface OBBranchAndFinancialInstitutionIdentification51
 */
export interface OBBranchAndFinancialInstitutionIdentification51 {
    /**
     * Unique and unambiguous identification of the servicing institution.
     * @type {string}
     * @memberof OBBranchAndFinancialInstitutionIdentification51
     */
    'Identification': string;
    /**
     * Name of the identification scheme, in a coded form as published in an external list.
     * @type {string}
     * @memberof OBBranchAndFinancialInstitutionIdentification51
     */
    'SchemeName': string;
}

