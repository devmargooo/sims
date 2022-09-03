import {Email} from "../services/AuthServiceDummy";

export function validateEmail(maybeEmail:string): maybeEmail is Email {
    return true;
}
