export type Phone = string;
export type Email = string;
export type User = string;

export interface IAuthService {
    loginByPhone(phone:Phone):Promise<User>;
    loginByEmail(email:Email):Promise<User>;
    logout():Promise<void>;
    isLoggedIn():boolean;
}

export class AuthServiceDummy implements IAuthService {
    public loginByPhone(phone:Phone) {
        return Promise.resolve("");
    }
    public loginByEmail(email:Email) {
        return Promise.resolve("");
    }
    public logout() {
        return Promise.resolve();
    }
    public isLoggedIn() {
        return false;
    }

}

export class AuthServiceFake implements IAuthService {
    private is_logged_in = false;
    private userName = "Vasya";
    public loginByPhone(phone:Phone) {
        this.is_logged_in = true;
        return Promise.resolve(this.userName);
    }
    public loginByEmail(email:Email) {
        this.is_logged_in = true;
        return Promise.resolve(this.userName);
    }
    public logout() {
        this.is_logged_in = false;
        return Promise.resolve();
    }
    public isLoggedIn() { return this.is_logged_in; }
}

export class AuthServiceStub implements IAuthService {
    constructor(private is_logged_in:boolean, private userName:string = "") {}
    public loginByPhone(phone:Phone) { return Promise.resolve(this.userName); }
    public loginByEmail(email:Email) { return Promise.resolve(this.userName); }
    public logout() { return Promise.resolve(); }
    public isLoggedIn() { return this.is_logged_in; }
}
