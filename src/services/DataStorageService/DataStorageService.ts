import {ISim} from "../../sims/Sims";
import {IDataStorageService, IStorageService} from "./interfaces";

export class DataStorageService implements IDataStorageService {
    constructor(private storageService:IStorageService) {
    }
    public write(sim:ISim):Promise<boolean> {
       return this.storageService.write(sim);
    }
    public get(id:number):Promise<ISim> {
        return this.storageService.get(id)
    }
}
