import { IClientSideCRMIntegration, IServerSideCRMIntegration } from './crm';
import { IEmergencyNumber, IPBX } from './pbx';
import { IUpdateParameters, IUpdates } from '../updates';
import { I3CXClient } from './tcx-client';
import { IActiveObjectResponse } from '../active-object-response';
import { IBlacklistedNumbers } from './blacklisted-numbers';
import { ICDR } from './cdr';
import { ICallParking } from './call-parking';
import { IConferencing } from './conferencing';
import { IContactSettings } from './phonebook/phonebook';
import { ICopyTemplate } from './templates/copy-template';
import { IDialCodes } from './dial-codes';
import { IE164 } from './e164';
import { IEmailTemplate } from './email-template';
import { IFaxServer } from './fax-server';
import { IHotelModule } from './hotel-module';
import { IHttpClient } from '../http-client';
import { ILicense } from './License';
import { IMusicOnHold } from './music-on-hold';
import { IParameters } from './paramaters';
import { IPhoneTemplates } from './templates/phone-template';
import { IPrompts } from './system-prompts/prompts';
import { IResponseSaveTemplate } from './templates/response-save-template';
import { ISaveTemplate } from './templates/saveTemplate';
import { ISecurity } from './security';
import { IServerSideTemplate } from './crm/crm-server-side-integration';
import { ISystemPromptSets } from './system-prompts/system-promptsets';
import { ITimezoneOfficeHours } from './timezone-and-office-hours';
import { IVoicemail } from './voicemail';
import { IWebmeetingToken } from './webmeeting-token';
export declare class SettingsClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    /**
     * Post 3CX Client Settings
     * @returns {Promise<IActiveObjectResponse<I3CXClient>>}
     */
    get3CXClientSettings(): Promise<I3CXClient>;
    /**
     * Get Blacklisted Numbers
     * @returns {Promise<IBlacklistedNumbers>}
     */
    getBlacklistedNumbers(): Promise<IBlacklistedNumbers[]>;
    /**
     * Post Delete Blacklisted Numbers
     * @param {string}
     * @returns {}
     */
    deleteBlacklistedNumber(deletedId: string): Promise<void>;
    /**
     * Post Add Blacklisted Numbers
     * @returns {IActiveObjectResponse<IBlacklistedNumbers>}
     */
    addBlacklistedNumber(): Promise<IActiveObjectResponse<IBlacklistedNumbers>>;
    /**
     * Post Call Parking Configurations
     * @returns {Promise<IActiveObjectResponse<ICallParking>>}
     */
    getCallParkingSettings(): Promise<ICallParking>;
    /**
     * Post CDR Configurations
     * @returns {Promise<IActiveObjectResponse<ICDR>>}
     */
    getCDRSettings(): Promise<ICDR>;
    /**
     * Post Conferencing Configurations
     * @returns {Promise<IActiveObjectResponse<IConferencing>>}
     */
    getConferencingSettings(): Promise<IConferencing>;
    /**
     * Get CRM Template
     * @returns {Promise<IServerSideTemplate>}
     */
    getCRMTemplate(country: string, crmName: string): Promise<IServerSideTemplate[]>;
    /**
     * Post Server Side CRM Configurations
     * @returns {Promise<IActiveObjectResponse<IServerSideCRMIntegration>>}
     */
    getServerSideCRMSettings(): Promise<IServerSideCRMIntegration>;
    /**
     * Post Download Server Side CRM
     * @param {IUpdateParameters}
     * @returns {Promise<IUpdates>}
     */
    downloadServerSideCRM(crmUpdate: IUpdateParameters[]): Promise<IUpdates>;
    /**
     * Post Delete Server Side CRM
     * @returns {Promise<string>}
     */
    deleteServerSideCRM(crmName: string): Promise<{
        deleted: boolean;
    }>;
    /**
     * Get Server Side CRM Updates
     * @returns {Promise<IUpdates>}
     */
    getServerSideCRMUpdates(crmName: string): Promise<IUpdates>;
    /**
     * Get Client Side CRM Configurations
     * @returns {Promise<IActiveObjectResponse<IClientSideCRMIntegration>>}
     */
    getClientSideCRMSettings(): Promise<IClientSideCRMIntegration[]>;
    /**
     * Post Download Client Side CRM
     * @param {IUpdateParameters}
     * @returns {Promise<IUpdates>}
     */
    downloadClientSideCRM(crmUpdate: IUpdateParameters[]): Promise<IUpdates>;
    /**
     * Post Delete Client Side CRM
     * @param {clientCrm}
     * @returns {}
     */
    deleteClientSideCRM(clientCrm: string): Promise<void>;
    /**
     * Post Dial Codes Settings
     * @returns {Promise<IActiveObjectResponse<IDialCodes>>}
     */
    getDialCodes(): Promise<IDialCodes>;
    /**
     * Post E164 Configurations
     * @returns {Promise<IActiveObjectResponse<IE164>>}
     */
    getE164Settings(): Promise<IE164>;
    /**
     * Post Email
     * @param {IHttpClient} httpClient
     * @returns {Promise<IEmailTemplate>}
     */
    postEmailTemplate(templatePath: IEmailTemplate): Promise<any>;
    /**
     * Get Email Template
     * @returns {Promise<IEmailTemplate>}
     */
    getEmailTemplate(template: string): Promise<IEmailTemplate>;
    /**
     * POST Test Email Server
     */
    testEmailServer(): Promise<void>;
    /**
     * Post Fax Server Configurations
     * @returns {Promise<IActiveObjectResponse<IFaxServer>>}
     */
    getFaxServerSettings(): Promise<IFaxServer>;
    /**
     * Post MOH Configurations
     * @returns {Promise<IActiveObjectResponse<IMusicOnHold>>}
     */
    getMOHSettings(): Promise<IMusicOnHold>;
    /**
     * Get License Information
     * @returns {Promise<ILicense>}
     */
    getLicenseInformation(): Promise<ILicense>;
    /**
     * Post Timezone Configurations
     * @returns {Promise<IActiveObjectResponse<ITimezoneOfficeHours>>}
     */
    getTimezoneSettings(): Promise<ITimezoneOfficeHours>;
    /**
     * Get Parameters list
     * @returns {Promise<IListResponse<IParameters>>}
     */
    getParametersList(): Promise<IParameters[]>;
    /**
     * Delete Parameter by Name
     * @param {string}
     */
    deleteParameter(parameterName: string): Promise<void>;
    /**
     * Add Parameter
     * @param {IParameters}
     */
    addParameter(newParameter: IParameters): Promise<void>;
    /**
     * Edit Parameter
     * @param {IParameters}
     */
    editParameter(newParameter: IParameters): Promise<void>;
    /**
     * Add DN Parameter
     * @param {IParameters}
     */
    addDNParameter(newParameter: IParameters): Promise<void>;
    /**
     * Get DN Property list
     * @param {string}
     * @returns {Promise<IListResponse<IParameters>>}
     */
    getDNPropertyList(value: string): Promise<IParameters[]>;
    /**
     * Edit DN Property list
     * @param {string}
     */
    editDNProperty(newParameter: IParameters): Promise<void>;
    /**
     * Delete Parameter by Name
     * @param {string}
     */
    deleteDNParameter(parameterName: string, dnNumber: string): Promise<void>;
    /**
     * Post PBX Configurations
     * @returns {Promise<IActiveObjectResponse<IPBX>>}
     */
    getPbxSettings(): Promise<IPBX>;
    /**
     * Get Emergency Number list
     * @returns {Promise<IListResponse<IEmergencyNumber>>}
     */
    getEmergencyNumbersSettings(): Promise<IEmergencyNumber[]>;
    /**
     * Delete Emergency Number by ID
     * @param {string}
     */
    deleteEmergencyNumber(ids: string): Promise<void>;
    /**
     * Post Security Configurations
     * @returns {Promise<IActiveObjectResponse<ISecurity>>}
     */
    getSecuritySettings(): Promise<ISecurity>;
    /**
     * Get List of System Prompts
     * returns {Promise<IListResponse<ISystemPromptSets>>}
     */
    getSystemPromptsList(): Promise<ISystemPromptSets[]>;
    /**
     * Get List of System Prompts
     * @param {string}
     * returns {Promise<IListResponse<IPrompts>>}
     */
    setActivePromptSet(name: string): Promise<IPrompts[]>;
    /**
     * POST Delete System Prompt
     * @param {string}
     * returns {Promise<ISystemPrompts>}
     */
    deleteSystemPrompt(namePromptSet: string): Promise<void>;
    /**
     * Post Contact (PhoneBook) Configurations
     * @returns {Promise<IActiveObjectResponse<IContactSettings>>}
     */
    getContactSettings(): Promise<IContactSettings>;
    /**
     * Get Phone Template
     * @returns {Promise<IPhoneTemplates>}
     */
    getPhoneTemplate(filename: string): Promise<IPhoneTemplates>;
    /**
     * POST Copy Phone Template
     * @returns {Promise<IListResponse<string>>}
     */
    copyPhoneTemplate(newTemplate: ICopyTemplate): Promise<string[]>;
    /**
     * POST Save Phone Template
     * @returns {Promise<IResponseSaveTemplate>}
     */
    savePhoneTemplate(saveTemplate: ISaveTemplate): Promise<IResponseSaveTemplate>;
    /**
     * POST Delete Phone Template
     * @returns {Promise<IListResponse<string>>}
     */
    deletePhoneTemplate(templateName: string): Promise<string[]>;
    /**
     * Post Voicemail Configurations
     * @returns {Promise<IActiveObjectResponse<IVoicemail>>}
     */
    getVoicemailSettings(): Promise<IVoicemail>;
    /**
     * Post Hotel Module Configurations
     * @returns {Promise<IActiveObjectResponse<IHotelModule>>}
     */
    getHotelModuleSettings(): Promise<IHotelModule>;
    /**
     * Get Webmeeting Token
     * @returns {Promise<IWebmeetingToken>}
     */
    getWebmeetingToken(): Promise<IWebmeetingToken>;
    /**
     * Generate Wordpress Settings
     * @returns {Promise<IWebmeetingToken>}
     */
    generateWebmeetingToken(): Promise<IWebmeetingToken>;
}
