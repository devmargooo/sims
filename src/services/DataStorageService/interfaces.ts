import {ISim} from "../../sims/Sims";

export interface IDataStorageService {
    write(sim:ISim):Promise<boolean>;
    get(id:number): Promise<ISim>;
}

export interface IStorageService {
    get(id:number): Promise<ISim>;
    write(sim:ISim):Promise<boolean>;
}

export interface IRequester {
    get(id:number): Promise<ISimGetResponse>
    post(sim:ISim):Promise<ISimPostResponse>
}

export interface ISimGetResponse<T = ISim> {
    data: T;
    status: number;
}

export interface ISimPostResponse {
    status: number;
}
