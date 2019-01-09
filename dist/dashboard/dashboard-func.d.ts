import { IHttpClient } from '../http-client';
import { IResponseFirewall } from './firewall';
import { IServices } from '../services';
export declare class DashboardClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    /**
     * Start Firewall
     * @returns {Promise<IResponseFirewall>}
     */
    startFirewall(): Promise<IResponseFirewall>;
    /**
     * Stop Firewall
     * @returns {Promise<IResponseFirewall>}
     */
    stopFirewall(): Promise<IResponseFirewall>;
    /**
     * Get Firewall Status
     * @returns {Promise<IResponseFirewall>}
     */
    getFirewallStatus(): Promise<IResponseFirewall>;
    /**
     * Get Services Status List
     * @returns {Promise<IServices[]>}
     */
    getServicesStatus(): Promise<IServices[]>;
}
