import {api} from "../index.ts";
import {AxiosResponse} from "axios";
import {IAllUser} from "../interface/user.interface.ts";
import {IUserInfo} from "../interface/auth.interface.ts";

class UserService {
    async allUsers(pageId: number): Promise<AxiosResponse<IAllUser>> {
        return api.get<IAllUser>(`/users/page/${pageId}`);
    }

    async userByUuid(uuid: string | undefined): Promise<AxiosResponse<IUserInfo>> {
        return api.get<IUserInfo>(`users/uuid/${uuid}?assets=true`)
    }
}

export default new UserService()