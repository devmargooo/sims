import {IStorageService} from "./interfaces";
import {ISim, parseSim} from "../../sims/Sims";

export class LocalStorageService implements IStorageService {
    get(id:number): Promise<ISim> {
        const sim:string | null = localStorage.getItem(id.toString());
        if (!sim) {
            throw new Error();
        }
        return Promise.resolve(parseSim(sim));
    }
    write(sim: ISim): Promise<boolean> {
        const id = sim.id.toString();
        localStorage.setItem(id, sim.serialize());
        return Promise.resolve(true);
    }
}
