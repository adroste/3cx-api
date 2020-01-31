export interface IRecordingParameters {
    after?: string;
    before?: string;
    callTypeFilter: number;
    count: number;
    filter?: string;
    start?: number;
    to?: number;
}
export interface IRecordings {
    TotalRowsCount: number;
    isGDriveSelected: boolean;
    transferRecordings: string;
    isArchiveEnabled: boolean;
    list: IRecording[];
}
export interface IRecording {
    Id: number;
    IsArchived: boolean;
    Date: string;
    Transcription: null | string;
    Participants: string[];
    CallerNumber: string;
    DID: null | string;
}
