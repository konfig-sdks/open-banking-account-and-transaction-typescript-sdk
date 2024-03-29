/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Details of capital repayment holiday if any
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner {
    /**
     * The maximum length/duration of a Repayment Holiday
     * @type {number}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner
     */
    'MaxHolidayLength'?: number;
    /**
     * The unit of period (days, weeks, months etc.) of the repayment holiday
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner
     */
    'MaxHolidayPeriod'?: OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInnerMaxHolidayPeriodEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner
     */
    'Notes'?: Array<string>;
}

type OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInnerMaxHolidayPeriodEnum = 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'


