/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Provides the details to identify an account.
 * @export
 * @interface OBAccount4AccountInner
 */
export interface OBAccount4AccountInner {
    /**
     * Identification assigned by an institution to identify an account. This identification is known by the account owner.
     * @type {string}
     * @memberof OBAccount4AccountInner
     */
    'Identification': string;
    /**
     * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP\'s online channels. Note, the account name is not the product name or the nickname of the account.
     * @type {string}
     * @memberof OBAccount4AccountInner
     */
    'Name'?: string;
    /**
     * Name of the identification scheme, in a coded form as published in an external list.
     * @type {string}
     * @memberof OBAccount4AccountInner
     */
    'SchemeName': string;
    /**
     * This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
     * @type {string}
     * @memberof OBAccount4AccountInner
     */
    'SecondaryIdentification'?: string;
}

