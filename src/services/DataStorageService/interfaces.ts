import {ISim} from "../../sims/Sims";

export interface IDataStorageService {
    write(sim:ISim):Promise<boolean>;
    get(id:number): Promise<ISim>
}
