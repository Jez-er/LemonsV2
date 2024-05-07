import {api} from "../index.ts";
import {AxiosResponse} from "axios";
import {IAuth, IUserInfo} from "../interface/auth.interface.ts";

class AuthService {
    async login(username: string, password: string): Promise<AxiosResponse<IAuth>> {
        return api.post<IAuth>('auth/authorize', {username, password});
    }
    async getUserInfo(): Promise<AxiosResponse<IUserInfo>> {
        return api.get<IUserInfo>('auth/userinfo')
    }
}

export default new AuthService()