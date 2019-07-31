import { IHttpClient } from '../http-client';
import { IResponseFirewall } from './firewall';
import { IServices } from '../services';
import { ISystemStatus } from '../system-status';
import { IActivityLogs } from './activity-logs';
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
    /**
     * Get system status
     * @returns {Promise<ISystemStatus>}
     */
    getSystemStatus(): Promise<ISystemStatus>;
    /**
     * Get activity Log Level
     * @returns {Promise<number>}
     */
    getActivityLogLevel(): Promise<number>;
    /**
     * Get activity Keep Logs
     * @returns {Promise<boolean>}
     */
    getActivityKeepLogs(): Promise<boolean>;
    /**
     * Get activity Keep Log Days
     * @returns {Promise<number>}
     */
    getActivityKeepLogDays(): Promise<number>;
    /**
     * Get activity Logs with range
     * @returns {Promise<List<IActivityLogs>>}
     */
    getActivityLogs(count: number, from: number): Promise<IActivityLogs[]>;
}
