import { ICredentials } from './credentials';
import { IHttpClient } from './http-client';
/**
 * Login to 3CX Phone System API
 * @param {IHttpClient} httpClient
 * @param {ICredentials} cred
 * @returns {Promise<string>}
 */
export declare function login(httpClient: IHttpClient, cred: ICredentials): Promise<string>;
/**
 * Logout from 3CX Phone System API
 * @param {IHttpClient} httpClient
 */
export declare function logout(httpClient: IHttpClient): Promise<import("./http-client").IResponse<string>>;
