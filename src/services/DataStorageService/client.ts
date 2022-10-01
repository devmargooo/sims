import {Human} from "../../sims/Sims";
import {DataStorageService} from "./DataStorageService";
import {LocalStorageService} from "./LocalStorageService";
import {ApiService} from "./ApiService";
import {FetchRequester} from "./FetchRequester";
import {AxiosRequester} from "./AxiosRequester";

function client1() {
    const sim = new Human();

    const storageService = new LocalStorageService();
    const dataStorageService = new DataStorageService(storageService);
}

function client2() {
    const sim = new Human();

    const requester = new FetchRequester();
    const storageService = new ApiService(requester);
    const dataStorageService = new DataStorageService(storageService);
}
