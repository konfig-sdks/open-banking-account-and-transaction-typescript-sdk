/* tslint:disable */
/* eslint-disable */
/*
Account and Transaction API Specification

Swagger for Account and Transaction API Specification

The version of the OpenAPI document: 3.1.7
Contact: ServiceDesk@openbanking.org.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { OBErrorResponse1 } from '../models';
// @ts-ignore
import { OBReadScheduledPayment3 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ScheduledPaymentsApi - axios parameter creator
 * @export
 */
export const ScheduledPaymentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Scheduled Payments
         * @param {string} accountId AccountId
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (accountId: string, xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getAll', 'accountId', accountId)
            const localVarPath = `/accounts/{AccountId}/scheduled-payments`
                .replace(`{${"AccountId"}}`, encodeURIComponent(String(accountId !== undefined ? accountId : `-AccountId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication PSUOAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PSUOAuth2Security", ["accounts"], configuration)
            if (xFapiAuthDate != null) {
                localVarHeaderParameter['x-fapi-auth-date'] = String(xFapiAuthDate);
            }

            if (xFapiCustomerIpAddress != null) {
                localVarHeaderParameter['x-fapi-customer-ip-address'] = String(xFapiCustomerIpAddress);
            }

            if (xFapiInteractionId != null) {
                localVarHeaderParameter['x-fapi-interaction-id'] = String(xFapiInteractionId);
            }

            if (xCustomerUserAgent != null) {
                localVarHeaderParameter['x-customer-user-agent'] = String(xCustomerUserAgent);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/accounts/{AccountId}/scheduled-payments',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Scheduled Payments
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll_1: async (xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/scheduled-payments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication PSUOAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PSUOAuth2Security", ["accounts"], configuration)
            if (xFapiAuthDate != null) {
                localVarHeaderParameter['x-fapi-auth-date'] = String(xFapiAuthDate);
            }

            if (xFapiCustomerIpAddress != null) {
                localVarHeaderParameter['x-fapi-customer-ip-address'] = String(xFapiCustomerIpAddress);
            }

            if (xFapiInteractionId != null) {
                localVarHeaderParameter['x-fapi-interaction-id'] = String(xFapiInteractionId);
            }

            if (xCustomerUserAgent != null) {
                localVarHeaderParameter['x-customer-user-agent'] = String(xCustomerUserAgent);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/scheduled-payments',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ScheduledPaymentsApi - functional programming interface
 * @export
 */
export const ScheduledPaymentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ScheduledPaymentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Scheduled Payments
         * @param {ScheduledPaymentsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: ScheduledPaymentsApiGetAllRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OBReadScheduledPayment3>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.accountId, requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Scheduled Payments
         * @param {ScheduledPaymentsApiGetAll0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll_1(requestParameters: ScheduledPaymentsApiGetAll0Request = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OBReadScheduledPayment3>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll_1(requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ScheduledPaymentsApi - factory interface
 * @export
 */
export const ScheduledPaymentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ScheduledPaymentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Scheduled Payments
         * @param {ScheduledPaymentsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: ScheduledPaymentsApiGetAllRequest, options?: AxiosRequestConfig): AxiosPromise<OBReadScheduledPayment3> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Scheduled Payments
         * @param {ScheduledPaymentsApiGetAll0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll_1(requestParameters: ScheduledPaymentsApiGetAll0Request = {}, options?: AxiosRequestConfig): AxiosPromise<OBReadScheduledPayment3> {
            return localVarFp.getAll_1(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAll operation in ScheduledPaymentsApi.
 * @export
 * @interface ScheduledPaymentsApiGetAllRequest
 */
export type ScheduledPaymentsApiGetAllRequest = {
    
    /**
    * AccountId
    * @type {string}
    * @memberof ScheduledPaymentsApiGetAll
    */
    readonly accountId: string
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof ScheduledPaymentsApiGetAll
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof ScheduledPaymentsApiGetAll
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof ScheduledPaymentsApiGetAll
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof ScheduledPaymentsApiGetAll
    */
    readonly xCustomerUserAgent?: string
    
}

/**
 * Request parameters for getAll_1 operation in ScheduledPaymentsApi.
 * @export
 * @interface ScheduledPaymentsApiGetAll0Request
 */
export type ScheduledPaymentsApiGetAll0Request = {
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof ScheduledPaymentsApiGetAll0
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof ScheduledPaymentsApiGetAll0
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof ScheduledPaymentsApiGetAll0
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof ScheduledPaymentsApiGetAll0
    */
    readonly xCustomerUserAgent?: string
    
}

/**
 * ScheduledPaymentsApiGenerated - object-oriented interface
 * @export
 * @class ScheduledPaymentsApiGenerated
 * @extends {BaseAPI}
 */
export class ScheduledPaymentsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get Scheduled Payments
     * @param {ScheduledPaymentsApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledPaymentsApiGenerated
     */
    public getAll(requestParameters: ScheduledPaymentsApiGetAllRequest, options?: AxiosRequestConfig) {
        return ScheduledPaymentsApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Scheduled Payments
     * @param {ScheduledPaymentsApiGetAll0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledPaymentsApiGenerated
     */
    public getAll_1(requestParameters: ScheduledPaymentsApiGetAll0Request = {}, options?: AxiosRequestConfig) {
        return ScheduledPaymentsApiFp(this.configuration).getAll_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
