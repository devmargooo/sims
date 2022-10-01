import {IRequester, IStorageService} from "./interfaces";
import {ISim} from "../../sims/Sims";
import {FetchRequester} from "./FetchRequester";

export class ApiService implements IStorageService {
    constructor(private requester:IRequester) {
    }
    public get(id:number): Promise<ISim> {
        return this.requester.get(id).then((response) => {
            if (response.status === 400) {
                throw new Error();
            }
            return response.data;
        })
    }
    public write(sim:ISim):Promise<boolean> {
        return this.requester.post(sim).then((response) => {
            if (response.status === 200) {
                return true;
            }
            return false;
        })
    }
}
