import {ICredentials} from './credentials';
import {IHttpClient} from './http-client';

/**
 * Login to 3CX Phone System API
 * @param {IHttpClient} httpClient
 * @param {ICredentials} cred
 * @returns {Promise<string>}
 */
export async function login(httpClient: IHttpClient, cred: ICredentials) {
    return (await httpClient.post<string>('/api/login', cred)).data;
}

/**
 * Logout from 3CX Phone System API
 * @param {IHttpClient} httpClient
 */
export async function logout(httpClient: IHttpClient) {
    return await httpClient.post<string>('/api/logout');
}
