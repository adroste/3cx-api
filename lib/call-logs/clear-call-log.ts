export interface IClearCallLog {
    ClearAllCallLogs: boolean;
    ReportClearPeriod: IReportClearPeriod;
    TimeZoneName: string;
}

export interface IReportClearPeriod {
    RangeType: string;
}

export interface IDeletedRows {
    deletedRows: number;
}
