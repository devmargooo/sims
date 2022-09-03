import {Email, Phone} from "../services/AuthServiceDummy";

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
