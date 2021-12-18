import { IElementType, IItemSetType } from '../../common';

export interface IContactSettings {
    AddQueueName?: IItemSetType<
        "TypeOfPhoneBookAddQueueName.NotAdd"
        | "TypeOfPhoneBookAddQueueName.Append"
        | "TypeOfPhoneBookAddQueueName.Prepend"
    >;
    DisplayType?: IItemSetType<
        "TypeOfPhoneBookDisplay.FirstNameLastName"
        | "TypeOfPhoneBookDisplay.LastNameFirstName"
    >;
    ResolvingLength?: IElementType;
    ResolvingType?: IItemSetType<
        "TypeOfPhoneBookResolving.NotResolve"
        | "TypeOfPhoneBookResolving.MatchExact"
        | "TypeOfPhoneBookResolving.MatchLength"
    >;
    Id: number;
    IsNew: boolean;
    _str: string;
}
