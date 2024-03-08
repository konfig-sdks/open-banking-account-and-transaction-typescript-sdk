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
import { OBReadConsent1 } from '../models';
// @ts-ignore
import { OBReadConsent1Data } from '../models';
// @ts-ignore
import { OBReadConsentResponse1 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AccountAccessApi - axios parameter creator
 * @export
 */
export const AccountAccessApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Account Access Consents
         * @param {OBReadConsent1} oBReadConsent1 Default
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConsent: async (oBReadConsent1: OBReadConsent1, xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'oBReadConsent1' is not null or undefined
            assertParamExists('createConsent', 'oBReadConsent1', oBReadConsent1)
            const localVarPath = `/account-access-consents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TPPOAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "TPPOAuth2Security", ["accounts"], configuration)
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: oBReadConsent1,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/account-access-consents',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(oBReadConsent1, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Account Access Consents
         * @param {string} consentId ConsentId
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConsent: async (consentId: string, xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'consentId' is not null or undefined
            assertParamExists('deleteConsent', 'consentId', consentId)
            const localVarPath = `/account-access-consents/{ConsentId}`
                .replace(`{${"ConsentId"}}`, encodeURIComponent(String(consentId !== undefined ? consentId : `-ConsentId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TPPOAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "TPPOAuth2Security", ["accounts"], configuration)
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
                pathTemplate: '/account-access-consents/{ConsentId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Account Access Consents
         * @param {string} consentId ConsentId
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsent: async (consentId: string, xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'consentId' is not null or undefined
            assertParamExists('getConsent', 'consentId', consentId)
            const localVarPath = `/account-access-consents/{ConsentId}`
                .replace(`{${"ConsentId"}}`, encodeURIComponent(String(consentId !== undefined ? consentId : `-ConsentId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TPPOAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "TPPOAuth2Security", ["accounts"], configuration)
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
                pathTemplate: '/account-access-consents/{ConsentId}',
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
 * AccountAccessApi - functional programming interface
 * @export
 */
export const AccountAccessApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountAccessApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Account Access Consents
         * @param {AccountAccessApiCreateConsentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConsent(requestParameters: AccountAccessApiCreateConsentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OBReadConsentResponse1>> {
            const oBReadConsent1: OBReadConsent1 = {
                Data: requestParameters.Data,
                Risk: requestParameters.Risk
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConsent(oBReadConsent1, requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Account Access Consents
         * @param {AccountAccessApiDeleteConsentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteConsent(requestParameters: AccountAccessApiDeleteConsentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteConsent(requestParameters.consentId, requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Account Access Consents
         * @param {AccountAccessApiGetConsentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConsent(requestParameters: AccountAccessApiGetConsentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OBReadConsentResponse1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConsent(requestParameters.consentId, requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountAccessApi - factory interface
 * @export
 */
export const AccountAccessApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountAccessApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Account Access Consents
         * @param {AccountAccessApiCreateConsentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConsent(requestParameters: AccountAccessApiCreateConsentRequest, options?: AxiosRequestConfig): AxiosPromise<OBReadConsentResponse1> {
            return localVarFp.createConsent(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Account Access Consents
         * @param {AccountAccessApiDeleteConsentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConsent(requestParameters: AccountAccessApiDeleteConsentRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteConsent(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Account Access Consents
         * @param {AccountAccessApiGetConsentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsent(requestParameters: AccountAccessApiGetConsentRequest, options?: AxiosRequestConfig): AxiosPromise<OBReadConsentResponse1> {
            return localVarFp.getConsent(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createConsent operation in AccountAccessApi.
 * @export
 * @interface AccountAccessApiCreateConsentRequest
 */
export type AccountAccessApiCreateConsentRequest = {
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof AccountAccessApiCreateConsent
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof AccountAccessApiCreateConsent
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof AccountAccessApiCreateConsent
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof AccountAccessApiCreateConsent
    */
    readonly xCustomerUserAgent?: string
    
} & OBReadConsent1

/**
 * Request parameters for deleteConsent operation in AccountAccessApi.
 * @export
 * @interface AccountAccessApiDeleteConsentRequest
 */
export type AccountAccessApiDeleteConsentRequest = {
    
    /**
    * ConsentId
    * @type {string}
    * @memberof AccountAccessApiDeleteConsent
    */
    readonly consentId: string
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof AccountAccessApiDeleteConsent
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof AccountAccessApiDeleteConsent
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof AccountAccessApiDeleteConsent
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof AccountAccessApiDeleteConsent
    */
    readonly xCustomerUserAgent?: string
    
}

/**
 * Request parameters for getConsent operation in AccountAccessApi.
 * @export
 * @interface AccountAccessApiGetConsentRequest
 */
export type AccountAccessApiGetConsentRequest = {
    
    /**
    * ConsentId
    * @type {string}
    * @memberof AccountAccessApiGetConsent
    */
    readonly consentId: string
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof AccountAccessApiGetConsent
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof AccountAccessApiGetConsent
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof AccountAccessApiGetConsent
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof AccountAccessApiGetConsent
    */
    readonly xCustomerUserAgent?: string
    
}

/**
 * AccountAccessApiGenerated - object-oriented interface
 * @export
 * @class AccountAccessApiGenerated
 * @extends {BaseAPI}
 */
export class AccountAccessApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create Account Access Consents
     * @param {AccountAccessApiCreateConsentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountAccessApiGenerated
     */
    public createConsent(requestParameters: AccountAccessApiCreateConsentRequest, options?: AxiosRequestConfig) {
        return AccountAccessApiFp(this.configuration).createConsent(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Account Access Consents
     * @param {AccountAccessApiDeleteConsentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountAccessApiGenerated
     */
    public deleteConsent(requestParameters: AccountAccessApiDeleteConsentRequest, options?: AxiosRequestConfig) {
        return AccountAccessApiFp(this.configuration).deleteConsent(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Account Access Consents
     * @param {AccountAccessApiGetConsentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountAccessApiGenerated
     */
    public getConsent(requestParameters: AccountAccessApiGetConsentRequest, options?: AxiosRequestConfig) {
        return AccountAccessApiFp(this.configuration).getConsent(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
