"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class DashboardClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Start Firewall
     * @returns {Promise<IResponseFirewall>}
     */
    startFirewall() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.post('/api/firewall/start')).data;
        });
    }
    /**
     * Stop Firewall
     * @returns {Promise<IResponseFirewall>}
     */
    stopFirewall() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.post('/api/firewall/stop')).data;
        });
    }
    /**
     * Get Firewall Status
     * @returns {Promise<IResponseFirewall>}
     */
    getFirewallStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/firewall');
            return response.data;
        });
    }
    /**
     * Get Services Status List
     * @returns {Promise<IServices[]>}
     */
    getServicesStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/ServiceList`);
            return response.data;
        });
    }
    /**
     * Get system status
     * @returns {Promise<ISystemStatus>}
     */
    getSystemStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/SystemStatus');
            return response.data;
        });
    }
    /**
     * Get activity Log Level
     * @returns {Promise<number>}
     */
    getActivityLogLevel() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/ActivityLog/getLogLevel');
            return response.data;
        });
    }
    /**
     * Get activity Keep Logs
     * @returns {Promise<boolean>}
     */
    getActivityKeepLogs() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/ActivityLog/getKeepLogs');
            return response.data;
        });
    }
    /**
     * Get activity Keep Log Days
     * @returns {Promise<number>}
     */
    getActivityKeepLogDays() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/ActivityLog/getKeepDays');
            return response.data;
        });
    }
    /**
     * Get activity Logs with range
     * @returns {Promise<List<IActivityLogs>>}
     */
    getActivityLogs(count, from) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/ActivityLog?count=${count}&startFrom=${from}`);
            return response.data.list;
        });
    }
    /**
     * Get Active Calls
     * @returns {Promise<List<IActiveCalls>>>}
     */
    getActiveCalls() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/activeCalls');
            return response.data.list;
        });
    }
    /**
     * Drop Active Call By ID
     * @param {number}
     */
    dropActiveCall(activeCallID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.httpClient.post(`/api/activeCalls/drop`, { Id: activeCallID });
        });
    }
}
exports.DashboardClient = DashboardClient;
