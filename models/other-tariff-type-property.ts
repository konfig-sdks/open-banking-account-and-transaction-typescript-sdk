/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Other tariff type which is not in the standard list.
 * @export
 * @interface OtherTariffTypeProperty
 */
export interface OtherTariffTypeProperty {
    /**
     * The four letter Mnemonic used within an XML file to identify a code
     * @type {string}
     * @memberof OtherTariffTypeProperty
     */
    'Code'?: string;
    /**
     * Description to describe the purpose of the code
     * @type {string}
     * @memberof OtherTariffTypeProperty
     */
    'Description': string;
    /**
     * Long name associated with the code
     * @type {string}
     * @memberof OtherTariffTypeProperty
     */
    'Name': string;
}
