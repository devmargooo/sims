import {AboutUs, Benefits, Contacts, EmailSubscriptionForm, Feature} from "./components";
import {ILandingPage} from "./interfaces";

export const LandingPage:React.FC<ILandingPage> = (props) => {
    return (
        <div className="landingPage">
            <AboutUs {...props}/>
            <Feature {...props}/>
            <EmailSubscriptionForm {...props}/>
            <Benefits {...props}/>
            <Contacts {...props}/>
        </div>
    )
}
