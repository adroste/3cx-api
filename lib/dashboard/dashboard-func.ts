import {IHttpClient} from '../http-client';
import {IResponseFirewall} from './firewall';
import {IServices} from '../services';
import {ISystemStatus} from '../system-status';
import {IActivityLogs} from './activity-logs';
import {IListResponse} from '../list-response';

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


}
