import {IUserInfo} from "../../https-api/interface/auth.interface.ts";


export interface IUserStore {
    user: IUserInfo
    isAuth: boolean
    isAdmin: boolean
    login: (email: string, password: string) => void
    /*registration: (login: string, email: string, password: string) => void
    logout: () => void*/
}