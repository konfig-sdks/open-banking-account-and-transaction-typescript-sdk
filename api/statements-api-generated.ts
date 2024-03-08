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
import { OBReadStatement2 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * StatementsApi - axios parameter creator
 * @export
 */
export const StatementsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Statements
         * @param {string} accountId AccountId
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {string} [fromStatementDateTime] The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
         * @param {string} [toStatementDateTime] The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (accountId: string, xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, fromStatementDateTime?: string, toStatementDateTime?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('get', 'accountId', accountId)
            const localVarPath = `/accounts/{AccountId}/statements`
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
            if (fromStatementDateTime !== undefined) {
                localVarQueryParameter['fromStatementDateTime'] = (fromStatementDateTime as any instanceof Date) ?
                    (fromStatementDateTime as any).toISOString() :
                    fromStatementDateTime;
            }

            if (toStatementDateTime !== undefined) {
                localVarQueryParameter['toStatementDateTime'] = (toStatementDateTime as any instanceof Date) ?
                    (toStatementDateTime as any).toISOString() :
                    toStatementDateTime;
            }

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
                pathTemplate: '/accounts/{AccountId}/statements',
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
         * @summary Get Statements
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [fromStatementDateTime] The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
         * @param {string} [toStatementDateTime] The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, fromStatementDateTime?: string, toStatementDateTime?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/statements`;
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
            if (fromStatementDateTime !== undefined) {
                localVarQueryParameter['fromStatementDateTime'] = (fromStatementDateTime as any instanceof Date) ?
                    (fromStatementDateTime as any).toISOString() :
                    fromStatementDateTime;
            }

            if (toStatementDateTime !== undefined) {
                localVarQueryParameter['toStatementDateTime'] = (toStatementDateTime as any instanceof Date) ?
                    (toStatementDateTime as any).toISOString() :
                    toStatementDateTime;
            }

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
                pathTemplate: '/statements',
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
         * @summary Get Statements
         * @param {string} statementId StatementId
         * @param {string} accountId AccountId
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (statementId: string, accountId: string, xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'statementId' is not null or undefined
            assertParamExists('getDetails', 'statementId', statementId)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getDetails', 'accountId', accountId)
            const localVarPath = `/accounts/{AccountId}/statements/{StatementId}`
                .replace(`{${"StatementId"}}`, encodeURIComponent(String(statementId !== undefined ? statementId : `-StatementId-`)))
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
                pathTemplate: '/accounts/{AccountId}/statements/{StatementId}',
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
         * @summary Get Statements
         * @param {string} statementId StatementId
         * @param {string} accountId AccountId
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile: async (statementId: string, accountId: string, xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'statementId' is not null or undefined
            assertParamExists('getFile', 'statementId', statementId)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getFile', 'accountId', accountId)
            const localVarPath = `/accounts/{AccountId}/statements/{StatementId}/file`
                .replace(`{${"StatementId"}}`, encodeURIComponent(String(statementId !== undefined ? statementId : `-StatementId-`)))
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
                pathTemplate: '/accounts/{AccountId}/statements/{StatementId}/file',
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
 * StatementsApi - functional programming interface
 * @export
 */
export const StatementsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StatementsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Statements
         * @param {StatementsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: StatementsApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OBReadStatement2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.accountId, requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, requestParameters.fromStatementDateTime, requestParameters.toStatementDateTime, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Statements
         * @param {StatementsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: StatementsApiGetAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OBReadStatement2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.fromStatementDateTime, requestParameters.toStatementDateTime, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Statements
         * @param {StatementsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: StatementsApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OBReadStatement2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.statementId, requestParameters.accountId, requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Statements
         * @param {StatementsApiGetFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFile(requestParameters: StatementsApiGetFileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFile(requestParameters.statementId, requestParameters.accountId, requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StatementsApi - factory interface
 * @export
 */
export const StatementsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StatementsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Statements
         * @param {StatementsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: StatementsApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<OBReadStatement2> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Statements
         * @param {StatementsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: StatementsApiGetAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<OBReadStatement2> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Statements
         * @param {StatementsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: StatementsApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<OBReadStatement2> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Statements
         * @param {StatementsApiGetFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile(requestParameters: StatementsApiGetFileRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getFile(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in StatementsApi.
 * @export
 * @interface StatementsApiGetRequest
 */
export type StatementsApiGetRequest = {
    
    /**
    * AccountId
    * @type {string}
    * @memberof StatementsApiGet
    */
    readonly accountId: string
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof StatementsApiGet
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof StatementsApiGet
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof StatementsApiGet
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof StatementsApiGet
    */
    readonly xCustomerUserAgent?: string
    
    /**
    * The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
    * @type {string}
    * @memberof StatementsApiGet
    */
    readonly fromStatementDateTime?: string
    
    /**
    * The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
    * @type {string}
    * @memberof StatementsApiGet
    */
    readonly toStatementDateTime?: string
    
}

/**
 * Request parameters for getAll operation in StatementsApi.
 * @export
 * @interface StatementsApiGetAllRequest
 */
export type StatementsApiGetAllRequest = {
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof StatementsApiGetAll
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof StatementsApiGetAll
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof StatementsApiGetAll
    */
    readonly xFapiInteractionId?: string
    
    /**
    * The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
    * @type {string}
    * @memberof StatementsApiGetAll
    */
    readonly fromStatementDateTime?: string
    
    /**
    * The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
    * @type {string}
    * @memberof StatementsApiGetAll
    */
    readonly toStatementDateTime?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof StatementsApiGetAll
    */
    readonly xCustomerUserAgent?: string
    
}

/**
 * Request parameters for getDetails operation in StatementsApi.
 * @export
 * @interface StatementsApiGetDetailsRequest
 */
export type StatementsApiGetDetailsRequest = {
    
    /**
    * StatementId
    * @type {string}
    * @memberof StatementsApiGetDetails
    */
    readonly statementId: string
    
    /**
    * AccountId
    * @type {string}
    * @memberof StatementsApiGetDetails
    */
    readonly accountId: string
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof StatementsApiGetDetails
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof StatementsApiGetDetails
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof StatementsApiGetDetails
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof StatementsApiGetDetails
    */
    readonly xCustomerUserAgent?: string
    
}

/**
 * Request parameters for getFile operation in StatementsApi.
 * @export
 * @interface StatementsApiGetFileRequest
 */
export type StatementsApiGetFileRequest = {
    
    /**
    * StatementId
    * @type {string}
    * @memberof StatementsApiGetFile
    */
    readonly statementId: string
    
    /**
    * AccountId
    * @type {string}
    * @memberof StatementsApiGetFile
    */
    readonly accountId: string
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof StatementsApiGetFile
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof StatementsApiGetFile
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof StatementsApiGetFile
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof StatementsApiGetFile
    */
    readonly xCustomerUserAgent?: string
    
}

/**
 * StatementsApiGenerated - object-oriented interface
 * @export
 * @class StatementsApiGenerated
 * @extends {BaseAPI}
 */
export class StatementsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get Statements
     * @param {StatementsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatementsApiGenerated
     */
    public get(requestParameters: StatementsApiGetRequest, options?: AxiosRequestConfig) {
        return StatementsApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Statements
     * @param {StatementsApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatementsApiGenerated
     */
    public getAll(requestParameters: StatementsApiGetAllRequest = {}, options?: AxiosRequestConfig) {
        return StatementsApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Statements
     * @param {StatementsApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatementsApiGenerated
     */
    public getDetails(requestParameters: StatementsApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return StatementsApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Statements
     * @param {StatementsApiGetFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatementsApiGenerated
     */
    public getFile(requestParameters: StatementsApiGetFileRequest, options?: AxiosRequestConfig) {
        return StatementsApiFp(this.configuration).getFile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}