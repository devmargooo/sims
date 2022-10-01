import {IRequester} from "./interfaces";
import axios, { AxiosResponse } from "axios";
import {api} from "./constants";
import {ISim} from "../../sims/Sims";

export class AxiosRequester implements IRequester {
    get(id:number) {
        return  axios.get(`${api}/${id}`)
    }
    post(sim: ISim): Promise<AxiosResponse> {
        return axios({
            method: 'post',
            url: api,
            data: {
                data: sim.serialize()
            }
        })
    }
}
