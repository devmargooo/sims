import {AuthServiceStub, Email, Phone, User} from "../services/AuthService/AuthServiceDummy";
import {useEffect, useState} from "react";

interface IUseLoggedInUser {
    login?: Email | Phone;
}

function isEmail (str:Email | Phone): str is Email {
    return true;
}


export const useLoggedInUser = ({login}: IUseLoggedInUser):User | undefined => {
    const [user, setUser] = useState<User>("Unknown");
    const AuthService = new AuthServiceStub(true, 'Katya');
    useEffect(() => {
        if (!login) {
            setUser("Unknown");
            return;
        }
        if (isEmail(login)) {
            AuthService.loginByEmail(login).then(setUser);
        } else {
            AuthService.loginByPhone(login).then(setUser);
        }
    }, [login])
    return user;
}
