/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBExternalPartyType1Code } from './obexternal-party-type1-code';
import { OBParty2AddressInner } from './obparty2-address-inner';
import { OBPartyRelationships1 } from './obparty-relationships1';

/**
 * 
 * @export
 * @interface OBParty2
 */
export interface OBParty2 {
    /**
     * A party’s role with respect to the related account.
     * @type {string}
     * @memberof OBParty2
     */
    'AccountRole'?: string;
    /**
     * 
     * @type {Array<OBParty2AddressInner>}
     * @memberof OBParty2
     */
    'Address'?: Array<OBParty2AddressInner>;
    /**
     * 
     * @type {boolean}
     * @memberof OBParty2
     */
    'BeneficialOwnership'?: boolean;
    /**
     * Address for electronic mail (e-mail).
     * @type {string}
     * @memberof OBParty2
     */
    'EmailAddress'?: string;
    /**
     * Specifies a character string with a maximum length of 350 characters.
     * @type {string}
     * @memberof OBParty2
     */
    'FullLegalName'?: string;
    /**
     * Legal standing of the party.
     * @type {string}
     * @memberof OBParty2
     */
    'LegalStructure'?: string;
    /**
     * Collection of information that identifies a mobile phone number, as defined by telecom services.
     * @type {string}
     * @memberof OBParty2
     */
    'Mobile'?: string;
    /**
     * Name by which a party is known and which is usually used to identify that party.
     * @type {string}
     * @memberof OBParty2
     */
    'Name'?: string;
    /**
     * A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.
     * @type {string}
     * @memberof OBParty2
     */
    'PartyId': string;
    /**
     * Number assigned by an agent to identify its customer.
     * @type {string}
     * @memberof OBParty2
     */
    'PartyNumber'?: string;
    /**
     * Party type, in a coded form.
     * @type {OBExternalPartyType1Code}
     * @memberof OBParty2
     */
    'PartyType'?: OBExternalPartyType1Code;
    /**
     * Collection of information that identifies a phone number, as defined by telecom services.
     * @type {string}
     * @memberof OBParty2
     */
    'Phone'?: string;
    /**
     * 
     * @type {OBPartyRelationships1}
     * @memberof OBParty2
     */
    'Relationships'?: OBPartyRelationships1;
}

