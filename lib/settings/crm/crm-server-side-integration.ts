import {IItemSetType, IElementType} from '../../common';

export interface IServerSideCRMIntegration {
    CrmTypeType: IItemSetType;
    EnabledForDidCalls: IElementType;
    EnabledForExternalCalls: IElementType;
    ExtensionDID: IItemSetType;
    PhonebookPriorityOptions: IItemSetType;
    TemplateCountry: IElementType;
    TemplateName: IElementType;
    VariableChoices: IElementType;
    Id: string;
    IsNew: boolean;
    _str: string;
}

export interface IServerSideTemplate {
    Authentication: IAuthentication;
    ConnectionOptions: IConnectionOptions;
    Country: string;
    Name: string;
    NumberOptions: INumberOptions;
    Parameters: ICRMParameters[];
    Scenarios: any;
    Version: number;
}

export interface IConnectionOptions {
    MaxCouncurrentRequests: number;
}

export interface IAuthentication {
    Type: string;
    Values: string[];
}

export interface INumberOptions {
    MaxLength: string;
    Prefix: string;
}

export interface ICRMParameters {
    Default: string|null;
    Editor: string;
    ListValues: string[];
    ListValuesText: string[];
    Name: string;
    Parent: string;
    RequestUrl?: string|null;
    RequestUrlParameters?: string|null;
    ResponseScenario?: string|null;
    Title: string;
    Type: string;
    Validation: null;
}
