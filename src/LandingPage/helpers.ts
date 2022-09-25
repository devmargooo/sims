import {Email} from "../services/AuthService/AuthServiceDummy";

export function validateEmail(maybeEmail:string): maybeEmail is Email {
    return true;
}
