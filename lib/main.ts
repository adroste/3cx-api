import { ICredentials } from './credentials';
import { IHttpClient } from './http-client';
import axios from 'axios';
import { login } from './util';

/**
 * Create logged in HTTP client
 * @param {string} baseURL
 * @param {ICredentials} credentials
 * @returns {Promise<IHttpClient>}
 */
export async function createClient(baseURL: string, credentials: ICredentials): Promise<IHttpClient> {
    const { wrapper } = await import(/* webpackIgnore: true */ 'axios-cookiejar-support');
    const { CookieJar } = await import(/* webpackIgnore: true */ 'tough-cookie');
    const jar = new CookieJar();
    const http = wrapper(axios.create({ baseURL, withCredentials: true, jar }));

    if (await login(http, credentials) !== 'AuthSuccess') {
        throw new Error('Invalid credentials');
    }

    return http;
}
