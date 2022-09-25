import {Email, Phone} from "../services/AuthService/AuthServiceDummy";

export interface ILandingPage {
    userEmail: Email;
    onEmailSubmit(newEmail:Email): Promise<void>;
    is_subscribed: boolean;
    featureText:string;
    featureImgSrc:string;
    about:string;
    email:Email;
    address:string;
    phone:Phone;
    benefits:string[];
}
