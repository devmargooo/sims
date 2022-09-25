// Greet.tsx

import {Email, User} from "../../services/AuthService/AuthServiceDummy";
import React, {useEffect, useState} from "react";
import AuthService from "./AuthService";

interface IGreet {
    email: Email;
}

export const Greet: React.FC<IGreet> = ({email}) => {
    const [user, setUser] = useState<User | undefined>();
    useEffect(() => {
        AuthService.loginByEmail(email).then((user:User) => {
            setUser(user)
        })
    }, [])
    if (!user) {
        return (
            <div data-testid="not_logged_in">please log in</div>
        )
    }
    return (
        <div data-testid="greeting">{`hello, ${user}`}</div>
    )
}
