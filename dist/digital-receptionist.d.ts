import { IElementType, IItemSetType } from '.';
export interface IIVR {
    CanBeDeleted: boolean;
    Id: number;
    Name: string;
    NoInputDest: string;
    Number: string;
    Prompt: string;
    UseMSExchange?: boolean;
    WakeupIvr: boolean;
    Type: number;
}
export interface IIvrSettings {
    CollectUserInput: IElementType;
    DirectFromIVR: IElementType<boolean>;
    DnType: IItemSetType;
    ExtensionDID: IItemSetType;
    ExternalIVR: IElementType<boolean>;
    ForwardWhenInvalidKeyDN: IItemSetType;
    ForwardWhenInvalidKeyType: IItemSetType;
    ForwardsEnabled: IElementType<boolean>;
    IVRType: IItemSetType<'IVRType.Default' | 'IVRType.CodeBased' | 'IVRType.ScriptBased' | 'IVRType.Wakeup'>;
    Id: number;
    InputLength: IElementType<number>;
    InputLengthEnabled: IElementType<boolean>;
    IsNew: boolean;
    IvrLanguage: IItemSetType<any>;
    KeyForwards: IElementType<any[]>;
    Name: IElementType;
    Number: IElementType;
    Prompt: IItemSetType;
    ScriptConfirm: IElementType<boolean>;
    ScriptPath: IElementType;
    Timeout: IElementType<number>;
    TimeoutForwardDN: IItemSetType;
    TimeoutForwardType: IItemSetType;
    _str: string;
}
export interface IIvrUpdateParameters {
    PropertyValue: any;
    Path: {
        ObjectId: string;
        PropertyPath: any;
    };
}
