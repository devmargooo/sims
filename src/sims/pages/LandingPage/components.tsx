import {Email, Phone} from "../../../services/AuthService/AuthServiceDummy";
import {ILandingPage} from "./interfaces";
import React, {useState} from "react";
import {validateEmail} from "./helpers";

export const EmailSubscriptionForm: React.FC<ILandingPage> = (props) => {
    const [email, changeEmail] = useState<Email>(props.userEmail);
    const [error, setError] = useState<string>("");
    const submitHandler = () => {
        if (validateEmail(email)) {
            props.onEmailSubmit(email);
        } else {
            setError("Неверный емейл :(")
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="email" value={email} onChange={(e) => changeEmail(e.target.value)}/>
            {error && <p className="error">{error}</p>}
            <button className="subscribeButton" type="submit">Подписаться</button>
        </form>
    )
}

export const AboutUs: React.FC<ILandingPage> = (props) => (
    <div className="aboutUs">{props.about}</div>
)

export const Feature: React.FC<ILandingPage> = (props) => (
    <div className="feature">
        <p className="featureText">{props.featureText}</p>
        <img className="featureImgSrc" src={props.featureImgSrc}/>
    </div>
)

export const Contacts: React.FC<ILandingPage> = (props) => (
    <div className="contactsBlock">
        <p className="address">{props.address}</p>
        <p className="email">{props.email}</p>
        <p className="phone">{props.phone}</p>
    </div>
);

export const Benefits: React.FC<ILandingPage> = (props) => (
    <ul className="benefits">
        {
            props.benefits.map((item) => <li className="benefit">{item}</li>)
        }
    </ul>
)
