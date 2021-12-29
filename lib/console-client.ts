import {IIVR, IIvrSettings, IIvrUpdateParameters} from './digital-receptionist';
import {IPlayFileParameters, IRecordFileParameters} from './file';
import {IRecordingParameters, IRecordings} from './recording';

import {IActiveObjectResponse} from './active-object-response';
import {IBackup} from './backup/backup';
import {ICallFlow} from './call-flow';
import {ICallLogs} from './call-logs/call-logs';
import {ICallLogsParameters} from './call-logs/call-log-parameters';
import {IChats} from './chats';
import {IExtension} from './extension';
import {IFax} from './fax';
import {IFaxExtension} from './fax-extension';
import {IFxsDect} from './fxs-dect';
import {IGroup} from './group';
import {IHttpClient} from './http-client';
import {IInboundRule} from './inbound-rule';
import {IListResponse} from './list-response';
import {INewBackup} from './backup/newBackup';
import {IOutboundRule} from './outbound-rule';
import {IPhone} from './phone';
import {IPhoneTemplate} from './phone-templates';
import {IPhonebookEntry} from './phonebook/phonebook-entry';
import {IQueue} from './queue';
import {IRingGroup} from './ring-group';
import {ITrunks} from './trunk';
import {IUpdateParameters} from './updates/update-parameters';
import {IUpdates} from './updates/updates';
import {IUserInfo} from './userinfo';

export class ConsoleClient {
    constructor(private readonly httpClient: IHttpClient) {
    }

    /**
     * Get extensions
     * @returns {Promise<IExtension[]>}
     */
    public async getExtensionList() {
        const response = await this.httpClient.get<IListResponse<IExtension>>('/api/ExtensionList');
        return response.data.list;
    }

    /**
     * Delete extension by ID
     * @param {string}
     */
    public async deleteExtension(ids: string) {
        await this.httpClient.post(`/api/ExtensionList/delete`, {Ids: [ids]});
    }


    /**
     * Get faxes
     * @returns {Promise<IFax[]>}
     */
    public async getFaxList() {
        const response = await this.httpClient.get<IListResponse<IFax>>('/api/FaxList');
        return response.data.list;
    }

    /**
     * Get current user info
     * @returns {Promise<IUserInfo>}
     */
    public async getCurrentUser() {
        const response = await this.httpClient.get<IUserInfo>('/api/CurrentUser');
        return response.data;
    }

    /**
     * Get groups
     * @returns {Promise<IGroup[]>}
     */
    public async getGroupList() {
        const response = await this.httpClient.get<IListResponse<IGroup>>('/api/GroupList');
        return response.data.list;
    }

    /**
     * Delete Group By Id
     * @param {string}
     */
    public async deleteGroup(ids: string) {
        await this.httpClient.post(`/api/GroupList/delete`, {Ids: [ids]});
    }

    /**
     * Get phonebook
     * @returns {Promise<IPhonebookEntry[]>}
     */
    public async getContactList(count: number, from: number) {
        const response = await this.httpClient.get<IListResponse<IPhonebookEntry>>(`/api/PhoneBookEntryList?count=${count}&filter=&from=${from}`);
        return response.data.list;
    }

    /**
     * Delete Contact By ID
     * @param {string}
     */
    public async deleteContact(ids: string) {
        await this.httpClient.post(`/api/PhoneBookEntryList/delete`, {Ids: [ids]});
    }

    /**
     * Get phones
     * @returns {Promise<IPhone[]>}
     */
    public async getPhonesList() {
        const response = await this.httpClient.get<IListResponse<IPhone>>('/api/PhoneList');
        return response.data.list;
    }

    /**
     * Get Queues
     * @returns {Promise<IQueue>}
     */
    public async getQueueList() {
        const response = await this.httpClient.get<IListResponse<IQueue>>('/api/QueueList');
        return response.data.list;
    }

    /**
     * Get Chats
     * @returns {Promise<IChats>}
     */
    public async getChatsList(count: number, from: number) {
        const response = await this.httpClient.get<IChats>(`/api/Chat/messages?count=${count}&filter=&from=${from}`);
        return response.data;
    }

    /**
     * Get Trunk List
     * @returns {Promise<ITrunks>}
     */
    public async getTrunkList() {
        const response = await this.httpClient.get<IListResponse<ITrunks>>(`/api/TrunkList`);
        return response.data.list;
    }

    /**
     * Delete Trunk by ID
     * @param {string}
     */
    public async deleteTrunk(ids: string) {
        await this.httpClient.post(`/api/TrunkList/delete`, {Ids: [ids]});
    }

    /**
     * Get Trunk Provider Countries
     * @returns {Promise<string[]>}
     */
    public async getTrunkProviderCountries() {
        const response = await this.httpClient.get<string[]>(`/api/TrunkList/providerCountries`);
        return response.data;
    }

    /**
     * Get Trunk Provider By Country
     * @returns {Promise<string[]>}
     */
    public async getTrunkProviderByCountry(country: string) {
        const response = await this.httpClient.get<string[]>(`api/TrunkList/providers?country=${country}`);
        return response.data;
    }

    /**
     * Get Inbound List
     * @returns {Promise<IInboundRule>}
     */
    public async getInboundRuleList() {
        const response = await this.httpClient.get<IListResponse<IInboundRule>>(`/api/InboundRulesList`);
        return response.data.list;
    }

    /**
     * Get Outbound List
     * @returns {Promise<IOutboundRule>}
     */
    public async getOutboundRuleList() {
        const response = await this.httpClient.get<IListResponse<IOutboundRule>>(`/api/OutboundRuleList`);
        return response.data.list;
    }

    /**
     * Get IVR List
     * @returns {Promise<IIVR>}
     */
    public async getIVRList() {
        const response = await this.httpClient.get<IListResponse<IIVR>>(`/api/IVRList`);
        return response.data.list;
    }

    /**
     * Get IVR Settings (for IVR id returned by getIVRList())
     * @returns {Promise<IIVR>}
     */
    public async getIVRSettings(id: number) {
        const response = await this.httpClient.post<IActiveObjectResponse<IIvrSettings>>(`/api/IVRList/set`, { Id: id });
        return response.data;
    }

    /**
     * Update IVR Settings (for IVR active edit id)
     * @returns {Promise<IIVR>}
     */
    public async updateIVRSettings(params: IIvrUpdateParameters) {
        await this.httpClient.post(`/api/edit/update`, params);
    }

    /**
     * Save IVR Settings (for IVR active edit id)
     * @returns {Promise<IIVR>}
     */
    public async saveIVRSettings(id: string) {
        await this.httpClient.post(`/api/edit/save`, id, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    /**
     * Delete IVR By Id
     * @param {string}
     */
    public async deleteIVR(ids: string) {
        await this.httpClient.post(`/api/IVRList/delete`, {Ids: [ids]});
    }

    /**
     * Get Ring Group List
     * @returns {Promise<IRingGroup>}
     */
    public async getRingGroupList() {
        const response = await this.httpClient.get<IListResponse<IRingGroup>>(`/api/RingGroupList`);
        return response.data.list;
    }

    /**
     * Get FAX Extension List
     * @returns {Promise<IFaxExtension>}
     */
    public async getFaxExtensionList() {
        const response = await this.httpClient.get<IListResponse<IFaxExtension>>(`/api/FaxList`);
        return response.data.list;
    }


    /**
     * Get FXS/Dect List
     * @returns {Promise<IFxsDect>}
     */
    public async getFXSDectList() {
        const response = await this.httpClient.get<IFxsDect>(`/api/FxsList`);
        return response.data;
    }

    /**
     * Get Hotdesking List
     * @returns {Promise<IFxsDect>}
     */
    public async getHotdeskingList() {
        const response = await this.httpClient.get<IListResponse<IFxsDect>>(`/api/HotdeskingList`);
        return response.data.list;
    }

    /**
     * Get Recordings List
     * @param {IRecordingParameters}
     * @returns {Promise<IRecordings>}
     */
    public async getRecordingsList(recordingParams: IRecordingParameters) {
        let url = `/api/RecordingList?callTypeFilter=${recordingParams.callTypeFilter}&count=${recordingParams.count}&start=${recordingParams.start}&filter=${recordingParams.filter}`;

        if (recordingParams.before) {
            url = url + `before=${recordingParams.before}`;
        }

        if (recordingParams.after) {
            url = url + `after=${recordingParams.after}`;
        }

        if (recordingParams.to) {
            url = url + `to=${recordingParams.to}`;
        }

        const response = await this.httpClient.get<IRecordings>(url);
        return response.data;
    }

    /**
     * Post Archive List of Recordings
     * @param {number[]}
     */
    public async archiveRecording(ids: number[]) {
        await this.httpClient.post(`/api/RecordingList/archive`, ids);
    }
    /**
     * Get Backup List
     * @returns {Promise<IBackup>}
     */
    public async getBackupList() {
        const response = await this.httpClient.get<IListResponse<IBackup>>(`/api/BackupAndRestoreList`);
        return response.data.list;
    }

    /**
     * Post New Backup List
     * @param {INewBackup}
     */
    public async newBackup(backupOptions: INewBackup) {
        await this.httpClient.post(`/api/BackupAndRestoreList/backup`, backupOptions);
    }

    /**
     * Post Delete Backup List
     * @param {string}
     */
    public async deleteBackup(id: number) {
        await this.httpClient.post(`/api/BackupAndRestoreList/delete`, {Ids: [id]});
    }

    /**
     * Restore Backup
     * @param {string}
     */
    public async restoreBackup(backupId: string, backupPassword: string) {
        await this.httpClient.post(`/api/BackupAndRestoreList/restore`, {id: backupId, password: backupPassword});
    }


    /**
     * Get Call Log List
     * @param {ICallLogsParameters}
     * @returns {Promise<ICallLogs>}
     */
    public async getCallLogList(filterParams: ICallLogsParameters) {
        const url = `/api/CallLog?TimeZoneName=${filterParams.TimeZoneName}&callState=${filterParams.callState}&dateRangeType=${filterParams.dateRangeType}&fromFilter=${filterParams.fromFilter}&fromFilterType=${filterParams.fromFilterType}&numberOfRows=${filterParams.numberOfRows}&searchFilter=${filterParams.searchFilter}&startRow=${filterParams.startRow}&toFilter=${filterParams.toFilter}&toFilterType=${filterParams.toFilterType}`;
        const response = await this.httpClient.get<ICallLogs>(url);
        return response.data;
    }

    /**
     * Delete Chat
     * @param {string}
     */
    public async deleteChat(id: number) {
        await this.httpClient.post(`/api/Chat/delete`, [id]);
    }


    /**
     * POST Download Update
     * @param {IUpdateParameters}
     * returns {Promise<IUpdateParameters>}
     */
    public async getUpdate(updates: IUpdateParameters[]) {
        const response = await this.httpClient.post<IUpdates>(`/api/updateChecker/update`, updates);
        return response.data.Updates;
    }

    /**
     * Get Phone Template List
     * @returns {Promise<IPhoneTemplate>}
     */
    public async getPhoneTemplatesList() {
        const response = await this.httpClient.get<IPhoneTemplate>(`/api/PhoneTemplates/getTemplatesByType`);
        return response.data;
    }

    /**
     * Get Call Flow List List
     * @returns {Promise<ICallFlow>}
     */
    public async getCallFlowList() {
        const response = await this.httpClient.get<IListResponse<ICallFlow>>(`/api/CallFlowApps`);
        return response.data.list;
    }

    /**
     * POST Delete Call Flow
     * @param {number}
     */
    public async deleteCallFlow(id: number) {
        await this.httpClient.post(`/api/CallFlowApps/delete`, {Ids: [id]});
    }

    /**
     * POST Play a file
     * @param {number}
     */
    public async playFile(params: IPlayFileParameters) {
        await this.httpClient.post(`/api/file/play`, params);
    }

    /**
     * POST Record a file
     * @param {number}
     */
    public async recordFile(params: IRecordFileParameters) {
        await this.httpClient.post(`/api/file/record`, params);
    }
}
