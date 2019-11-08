import {IHttpClient} from '../http-client';
import {IResponseFirewall} from './firewall';
import {IServices} from '../services';
import {ISystemStatus} from '../system-status';
import {IActivityLogs} from './activity-logs';
import {IListResponse} from '../list-response';
import {IActiveCalls} from './active-calls';

export class DashboardClient {
    constructor(private readonly httpClient: IHttpClient) {
    }

    /**
     * Start Firewall
     * @returns {Promise<IResponseFirewall>}
     */
    public async startFirewall() {
        return (await this.httpClient.post<IResponseFirewall>('/api/firewall/start')).data;
    }

    /**
     * Stop Firewall
     * @returns {Promise<IResponseFirewall>}
     */
    public async stopFirewall() {
        return (await this.httpClient.post<IResponseFirewall>('/api/firewall/stop')).data;
    }


    /**
     * Get Firewall Status
     * @returns {Promise<IResponseFirewall>}
     */
    public async getFirewallStatus() {
        const response = await this.httpClient.get<IResponseFirewall>('/api/firewall');
        return response.data;
    }

    /**
     * Get Services Status List
     * @returns {Promise<IServices[]>}
     */
    public async getServicesStatus() {
        const response = await this.httpClient.get<IServices[]>(`/api/ServiceList`);
        return response.data;
    }

    /**
     * Stop Service
     * @returns {Promise<IServices[]>}
     */
    public async stopService(serviceName: string) {
        const response = await this.httpClient.post<IServices[]>(`/api/ServiceList/stop`, [serviceName]);
        return response.data;
    }

    /**
     * Start Service
     * @returns {Promise<IServices[]>}
     */
    public async startService(serviceName: string) {
        const response = await this.httpClient.post<IServices[]>(`/api/ServiceList/start`, [serviceName]);
        return response.data;
    }

    /**
     * Restart Service
     * @returns {Promise<IServices[]>}
     */
    public async restartService(serviceName: string) {
        const response = await this.httpClient.post<IServices[]>(`/api/ServiceList/restart`, [serviceName]);
        return response.data;
    }

    /**
     * Get system status
     * @returns {Promise<ISystemStatus>}
     */
    public async getSystemStatus() {
        const response = await this.httpClient.get<ISystemStatus>('/api/SystemStatus');
        return response.data;
    }

    /**
     * Get activity Log Level
     * @returns {Promise<number>}
     */
    public async getActivityLogLevel() {
        const response = await this.httpClient.get<number>('/api/ActivityLog/getLogLevel');
        return response.data;
    }

    /**
     * Get activity Keep Logs
     * @returns {Promise<boolean>}
     */
    public async getActivityKeepLogs() {
        const response = await this.httpClient.get<boolean>('/api/ActivityLog/getKeepLogs');
        return response.data;
    }

    /**
     * Get activity Keep Log Days
     * @returns {Promise<number>}
     */
    public async getActivityKeepLogDays() {
        const response = await this.httpClient.get<number>('/api/ActivityLog/getKeepDays');
        return response.data;
    }

    /**
     * Get activity Logs with range
     * @returns {Promise<List<IActivityLogs>>}
     */
    public async getActivityLogs(count: number, from: number) {
        const response = await this.httpClient.get<IListResponse<IActivityLogs>>(`/api/ActivityLog?count=${count}&startFrom=${from}`);
        return response.data.list;
    }

    /**
     * Get Active Calls
     * @returns {Promise<List<IActiveCalls>>>}
     */
    public async getActiveCalls() {
        const response = await this.httpClient.get<IListResponse<IActiveCalls>>('/api/activeCalls');
        return response.data.list;
    }

    /**
     * Drop Active Call By ID
     * @param {number}
     */
    public async dropActiveCall(activeCallID: number) {
        await this.httpClient.post(`/api/activeCalls/drop`, {Id: activeCallID});
    }

}
