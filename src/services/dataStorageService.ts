import {ISim} from "../sims/Sims";
import axios from "axios";

const api = 'http://localhost:3030/sims';

class DataStorageService {
    public write(sim:ISim) {
        axios({
            method: 'post',
            url: api,
            data: {
                data: sim.serialize()
            }
        });
    }
    public get(id:number):Promise<ISim | undefined> {
        return axios.get(`${api}/${id}`).then((response) => {
            if (response.status === 400) {
                return void 0;
            }
            return response.data;
        })
    }
}

export const dataStorageService = new DataStorageService();
