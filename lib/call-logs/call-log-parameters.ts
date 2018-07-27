import {NumberFilterType, CallState, DateRangeType} from '../reports';

export interface ICallLogsParameters {
    TimeZoneName: string;
    callState: CallState;
    dateRangeType: DateRangeType;
    fromFilter?: string;
    fromFilterType: NumberFilterType;
    numberOfRows: number;
    searchFilter?: string;
    startRow: number;
    toFilter?: string;
    toFilterType: NumberFilterType;
}
