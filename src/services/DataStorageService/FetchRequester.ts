import {IRequester, ISimGetResponse, ISimPostResponse} from "./interfaces";
import {api} from "./constants";
import {ISim} from "../../sims/Sims";

export class FetchRequester implements IRequester {
    get(id: number): Promise<ISimGetResponse> {
        return fetch(`${api}/${id}`).then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error();
        }).then((data:ISim) => {
            return {
                data,
                status: 200,
            }
        })
    }
    post(sim: ISim): Promise<ISimPostResponse> {
        return fetch(`${api}/${sim.id}`, {
            method: "post",
            body: sim.serialize(),
        }).then((response) => {
            if (response) {
                return {
                    status: response.status,
                }
            }
            throw new Error();
        })
    }
}
