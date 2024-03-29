/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Set of elements to fully identify a proprietary bank transaction code.
 * @export
 * @interface ProprietaryBankTransactionCodeStructure1
 */
export interface ProprietaryBankTransactionCodeStructure1 {
    /**
     * Proprietary bank transaction code to identify the underlying transaction.
     * @type {string}
     * @memberof ProprietaryBankTransactionCodeStructure1
     */
    'Code': string;
    /**
     * Identification of the issuer of the proprietary bank transaction code.
     * @type {string}
     * @memberof ProprietaryBankTransactionCodeStructure1
     */
    'Issuer'?: string;
}

