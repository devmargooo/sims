import {ISim} from "../sims/Sims";

export class ApiService {
    public write(sim:ISim) {
        const data = sim.serialize();
    }
}
