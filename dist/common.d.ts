export interface IProperty {
    Path: IPath;
    PropertyValue: string;
}
export interface IPath {
    ObjectId: string;
    PropertyPath: INameType[];
}
export interface INameType {
    Name: string;
}
export interface IElementType<T = string> {
    type: number;
    _value: T;
    disabled?: boolean;
    hide?: boolean;
}
export interface IItemSetType<T = string> {
    possibleValues: T[];
    selected: T;
    translatable: boolean;
    type: number;
    disabled?: boolean;
    hide?: boolean;
}
