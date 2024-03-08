/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OtherFeeTypePropertyInner } from './other-fee-type-property-inner';

/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
 * @export
 * @interface OverdraftFeeChargeCapProperty
 */
export interface OverdraftFeeChargeCapProperty {
    /**
     * Period e.g. day, week, month etc. for which the fee/charge is capped
     * @type {string}
     * @memberof OverdraftFeeChargeCapProperty
     */
    'CappingPeriod'?: OverdraftFeeChargeCapPropertyCappingPeriodEnum;
    /**
     * Cap amount charged for a fee/charge
     * @type {string}
     * @memberof OverdraftFeeChargeCapProperty
     */
    'FeeCapAmount'?: string;
    /**
     * fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount
     * @type {number}
     * @memberof OverdraftFeeChargeCapProperty
     */
    'FeeCapOccurrence'?: number;
    /**
     * Fee/charge type which is being capped
     * @type {Array<string>}
     * @memberof OverdraftFeeChargeCapProperty
     */
    'FeeType': Array<OverdraftFeeChargeCapPropertyFeeTypeEnum>;
    /**
     * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
     * @type {string}
     * @memberof OverdraftFeeChargeCapProperty
     */
    'MinMaxType': OverdraftFeeChargeCapPropertyMinMaxTypeEnum;
    /**
     * Notes related to Overdraft fee charge cap
     * @type {Array<string>}
     * @memberof OverdraftFeeChargeCapProperty
     */
    'Notes'?: Array<string>;
    /**
     * Other fee type code which is not available in the standard code set
     * @type {Array<OtherFeeTypePropertyInner>}
     * @memberof OverdraftFeeChargeCapProperty
     */
    'OtherFeeType'?: Array<OtherFeeTypePropertyInner>;
    /**
     * Specifies for the overdraft control feature/benefit
     * @type {boolean}
     * @memberof OverdraftFeeChargeCapProperty
     */
    'OverdraftControlIndicator'?: boolean;
}

type OverdraftFeeChargeCapPropertyCappingPeriodEnum = 'AcademicTerm' | 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'
type OverdraftFeeChargeCapPropertyFeeTypeEnum = 'ArrangedOverdraft' | 'EmergencyBorrowing' | 'BorrowingItem' | 'OverdraftRenewal' | 'AnnualReview' | 'OverdraftSetup' | 'Surcharge' | 'TempOverdraft' | 'UnauthorisedBorrowing' | 'UnauthorisedPaidTrans' | 'Other' | 'UnauthorisedUnpaidTrans'
type OverdraftFeeChargeCapPropertyMinMaxTypeEnum = 'Minimum' | 'Maximum'


