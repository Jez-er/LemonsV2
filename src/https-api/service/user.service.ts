import {api} from "../index.ts";
import {AxiosResponse} from "axios";
import {IAllUser} from "../interface/user.interface.ts";

class UserService {
    async allUsers(pageId: number): Promise<AxiosResponse<IAllUser>> {
        return api.get<IAllUser>(`/users/page/${pageId}`);
    }
}

export default new UserService()