import {Human} from "../sims/Sims";
import {DataStorageService} from "../services/DataStorageService/DataStorageService";

function feature1() {
    const sim = new Human();
    const dataStorageService = new DataStorageService();
    dataStorageService.write(sim);
}
