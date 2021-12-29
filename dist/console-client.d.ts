import { IIVR, IIvrSettings, IIvrUpdateParameters } from './digital-receptionist';
import { IPlayFileParameters, IRecordFileParameters } from './file';
import { IRecordingParameters, IRecordings } from './recording';
import { IActiveObjectResponse } from './active-object-response';
import { IBackup } from './backup/backup';
import { ICallFlow } from './call-flow';
import { ICallLogs } from './call-logs/call-logs';
import { ICallLogsParameters } from './call-logs/call-log-parameters';
import { IChats } from './chats';
import { IExtension } from './extension';
import { IFax } from './fax';
import { IFaxExtension } from './fax-extension';
import { IFxsDect } from './fxs-dect';
import { IGroup } from './group';
import { IHttpClient } from './http-client';
import { IInboundRule } from './inbound-rule';
import { INewBackup } from './backup/newBackup';
import { IOutboundRule } from './outbound-rule';
import { IPhone } from './phone';
import { IPhoneTemplate } from './phone-templates';
import { IPhonebookEntry } from './phonebook/phonebook-entry';
import { IQueue } from './queue';
import { IRingGroup } from './ring-group';
import { ITrunks } from './trunk';
import { IUpdateParameters } from './updates/update-parameters';
import { IUserInfo } from './userinfo';
export declare class ConsoleClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    /**
     * Get extensions
     * @returns {Promise<IExtension[]>}
     */
    getExtensionList(): Promise<IExtension[]>;
    /**
     * Delete extension by ID
     * @param {string}
     */
    deleteExtension(ids: string): Promise<void>;
    /**
     * Get faxes
     * @returns {Promise<IFax[]>}
     */
    getFaxList(): Promise<IFax[]>;
    /**
     * Get current user info
     * @returns {Promise<IUserInfo>}
     */
    getCurrentUser(): Promise<IUserInfo>;
    /**
     * Get groups
     * @returns {Promise<IGroup[]>}
     */
    getGroupList(): Promise<IGroup[]>;
    /**
     * Delete Group By Id
     * @param {string}
     */
    deleteGroup(ids: string): Promise<void>;
    /**
     * Get phonebook
     * @returns {Promise<IPhonebookEntry[]>}
     */
    getContactList(count: number, from: number): Promise<IPhonebookEntry[]>;
    /**
     * Delete Contact By ID
     * @param {string}
     */
    deleteContact(ids: string): Promise<void>;
    /**
     * Get phones
     * @returns {Promise<IPhone[]>}
     */
    getPhonesList(): Promise<IPhone[]>;
    /**
     * Get Queues
     * @returns {Promise<IQueue>}
     */
    getQueueList(): Promise<IQueue[]>;
    /**
     * Get Chats
     * @returns {Promise<IChats>}
     */
    getChatsList(count: number, from: number): Promise<IChats>;
    /**
     * Get Trunk List
     * @returns {Promise<ITrunks>}
     */
    getTrunkList(): Promise<ITrunks[]>;
    /**
     * Delete Trunk by ID
     * @param {string}
     */
    deleteTrunk(ids: string): Promise<void>;
    /**
     * Get Trunk Provider Countries
     * @returns {Promise<string[]>}
     */
    getTrunkProviderCountries(): Promise<string[]>;
    /**
     * Get Trunk Provider By Country
     * @returns {Promise<string[]>}
     */
    getTrunkProviderByCountry(country: string): Promise<string[]>;
    /**
     * Get Inbound List
     * @returns {Promise<IInboundRule>}
     */
    getInboundRuleList(): Promise<IInboundRule[]>;
    /**
     * Get Outbound List
     * @returns {Promise<IOutboundRule>}
     */
    getOutboundRuleList(): Promise<IOutboundRule[]>;
    /**
     * Get IVR List
     * @returns {Promise<IIVR>}
     */
    getIVRList(): Promise<IIVR[]>;
    /**
     * Get IVR Settings (for IVR id returned by getIVRList())
     * @returns {Promise<IIVR>}
     */
    getIVRSettings(id: number): Promise<IActiveObjectResponse<IIvrSettings>>;
    /**
     * Update IVR Settings (for IVR active edit id)
     * @returns {Promise<IIVR>}
     */
    updateIVRSettings(params: IIvrUpdateParameters): Promise<void>;
    /**
     * Save IVR Settings (for IVR active edit id)
     * @returns {Promise<IIVR>}
     */
    saveIVRSettings(id: string): Promise<void>;
    /**
     * Delete IVR By Id
     * @param {string}
     */
    deleteIVR(ids: string): Promise<void>;
    /**
     * Get Ring Group List
     * @returns {Promise<IRingGroup>}
     */
    getRingGroupList(): Promise<IRingGroup[]>;
    /**
     * Get FAX Extension List
     * @returns {Promise<IFaxExtension>}
     */
    getFaxExtensionList(): Promise<IFaxExtension[]>;
    /**
     * Get FXS/Dect List
     * @returns {Promise<IFxsDect>}
     */
    getFXSDectList(): Promise<IFxsDect>;
    /**
     * Get Hotdesking List
     * @returns {Promise<IFxsDect>}
     */
    getHotdeskingList(): Promise<IFxsDect[]>;
    /**
     * Get Recordings List
     * @param {IRecordingParameters}
     * @returns {Promise<IRecordings>}
     */
    getRecordingsList(recordingParams: IRecordingParameters): Promise<IRecordings>;
    /**
     * Post Archive List of Recordings
     * @param {number[]}
     */
    archiveRecording(ids: number[]): Promise<void>;
    /**
     * Get Backup List
     * @returns {Promise<IBackup>}
     */
    getBackupList(): Promise<IBackup[]>;
    /**
     * Post New Backup List
     * @param {INewBackup}
     */
    newBackup(backupOptions: INewBackup): Promise<void>;
    /**
     * Post Delete Backup List
     * @param {string}
     */
    deleteBackup(id: number): Promise<void>;
    /**
     * Restore Backup
     * @param {string}
     */
    restoreBackup(backupId: string, backupPassword: string): Promise<void>;
    /**
     * Get Call Log List
     * @param {ICallLogsParameters}
     * @returns {Promise<ICallLogs>}
     */
    getCallLogList(filterParams: ICallLogsParameters): Promise<ICallLogs>;
    /**
     * Delete Chat
     * @param {string}
     */
    deleteChat(id: number): Promise<void>;
    /**
     * POST Download Update
     * @param {IUpdateParameters}
     * returns {Promise<IUpdateParameters>}
     */
    getUpdate(updates: IUpdateParameters[]): Promise<IUpdateParameters[]>;
    /**
     * Get Phone Template List
     * @returns {Promise<IPhoneTemplate>}
     */
    getPhoneTemplatesList(): Promise<IPhoneTemplate>;
    /**
     * Get Call Flow List List
     * @returns {Promise<ICallFlow>}
     */
    getCallFlowList(): Promise<ICallFlow[]>;
    /**
     * POST Delete Call Flow
     * @param {number}
     */
    deleteCallFlow(id: number): Promise<void>;
    /**
     * POST Play a file
     * @param {number}
     */
    playFile(params: IPlayFileParameters): Promise<void>;
    /**
     * POST Record a file
     * @param {number}
     */
    recordFile(params: IRecordFileParameters): Promise<void>;
}
