/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OverdraftFeesChargesPropertyInner2 } from './overdraft-fees-charges-property-inner2';
import { OverdraftTierBandPropertyInner1 } from './overdraft-tier-band-property-inner1';

/**
 * Tier band set details
 * @export
 * @interface OverdraftTierBandSetPropertyInner1
 */
export interface OverdraftTierBandSetPropertyInner1 {
    /**
     * Indicates if the Overdraft is authorised (Y) or unauthorised (N)
     * @type {boolean}
     * @memberof OverdraftTierBandSetPropertyInner1
     */
    'AuthorisedIndicator'?: boolean;
    /**
     * When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.
     * @type {string}
     * @memberof OverdraftTierBandSetPropertyInner1
     */
    'BufferAmount'?: string;
    /**
     * Unique and unambiguous identification of a  Tier Band for a overdraft product.
     * @type {string}
     * @memberof OverdraftTierBandSetPropertyInner1
     */
    'Identification'?: string;
    /**
     * Optional additional notes to supplement the overdraft Tier Band Set details
     * @type {Array<string>}
     * @memberof OverdraftTierBandSetPropertyInner1
     */
    'Notes'?: Array<string>;
    /**
     * Overdraft fees and charges details
     * @type {Array<OverdraftFeesChargesPropertyInner2>}
     * @memberof OverdraftTierBandSetPropertyInner1
     */
    'OverdraftFeesCharges'?: Array<OverdraftFeesChargesPropertyInner2>;
    /**
     * Provides overdraft details for a specific tier or band
     * @type {Array<OverdraftTierBandPropertyInner1>}
     * @memberof OverdraftTierBandSetPropertyInner1
     */
    'OverdraftTierBand': Array<OverdraftTierBandPropertyInner1>;
    /**
     * An overdraft can either be \'committed\' which means that the facility cannot be withdrawn without reasonable notification before it\'s agreed end date, or \'on demand\' which means that the financial institution can demand repayment at any point in time.
     * @type {string}
     * @memberof OverdraftTierBandSetPropertyInner1
     */
    'OverdraftType'?: OverdraftTierBandSetPropertyInner1OverdraftTypeEnum;
    /**
     * The methodology of how overdraft is charged. It can be: \'Whole\'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable).  \'Tiered\' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation \'Banded\' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.
     * @type {string}
     * @memberof OverdraftTierBandSetPropertyInner1
     */
    'TierBandMethod': OverdraftTierBandSetPropertyInner1TierBandMethodEnum;
}

type OverdraftTierBandSetPropertyInner1OverdraftTypeEnum = 'Committed' | 'OnDemand' | 'Other'
type OverdraftTierBandSetPropertyInner1TierBandMethodEnum = 'Tiered' | 'Whole' | 'Banded'


