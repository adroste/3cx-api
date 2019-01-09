import {IHttpClient} from '../http-client';
import {IResponseFirewall} from './firewall';
import {IServices} from '../services';
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
}
