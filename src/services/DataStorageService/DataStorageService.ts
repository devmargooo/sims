import {ISim} from "../../sims/Sims";
import axios from "axios";
import {IDataStorageService} from "./interfaces";

const api = 'http://localhost:3030/sims';

export class DataStorageService implements IDataStorageService {
    public write(sim:ISim):Promise<boolean> {
        return axios({
            method: 'post',
            url: api,
            data: {
                data: sim.serialize()
            }
        }).then((response) => {
            if (response.status === 200) {
                return true;
            }
            return false;
        })
    }
    public get(id:number):Promise<ISim> {
        return axios.get(`${api}/${id}`).then((response) => {
            if (response.status === 400) {
                return void 0;
            }
            return response.data;
        })
    }
}
