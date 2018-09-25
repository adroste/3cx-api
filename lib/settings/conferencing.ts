import {IElementType, IItemSetType} from '../common';

export interface IConferencing {
    CallWhenCreatingConference: IElementType;
    ConferenceDID: IItemSetType;
    ConferenceEnablePIN: IElementType;
    ConferenceExtension: IElementType;
    ConferenceLogoPath: IElementType;
    ConferenceMainPhoneNumber: IElementType;
    ConferenceMcuServer: IItemSetType;
    ConferenceMusicOnHold: IItemSetType;
    ConferencePIN: IElementType;
    ConferenceTheme: IItemSetType;
    Id: string;
    IsNew: boolean;
    _str: string;
}
