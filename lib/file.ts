export interface IPlayFileParameters {
    ExtId: string; // Extension-Nr to play the file to
    Id: string; // Id of active object response (IActiveObjectResponse.Id)
    Name: string; // name of file to play, e.g. "Empty.wav"
    PropertyPath: string; // escaped json of path in object, e.g. "[{\"Name\":\"Prompt\"}]" for IVR
}

export interface IRecordFileParameters {
    ExtId: string; // Extension-Nr to record the file with
    Id: string; // Id of active object response (IActiveObjectResponse.Id)
    Name: string; // name of file to save, e.g. "my-recording.wav"
    PropertyPath: string; // escaped json of path in object, e.g. "[{\"Name\":\"Prompt\"}]" for IVR
    ObjectId: number; // Id of active object (IActiveObjectResponse.ActiveObject.Id)
}