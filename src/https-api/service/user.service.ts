import {api} from "../index.ts";
import {AxiosResponse} from "axios";
import {IAddGroup, IAllUser} from "../interface/user.interface.ts";
import {IUserInfo} from "../interface/auth.interface.ts";

class UserService {
    async allUsers(pageId: number): Promise<IAllUser> {
        const response: AxiosResponse<IAllUser> = await api.get<IAllUser>(`/users/page/${pageId}`);
        return response.data;
    }

    async userByUuid(uuid: string | undefined): Promise<AxiosResponse<IUserInfo>> {
        return api.get<IUserInfo>(`users/uuid/${uuid}?assets=true`)
    }

    async adminDeleteUserAssets(id: number | undefined, asset: string) {
        return api.delete(`users/id/${id}/asset/${asset}`)
    }

    async deleteUserStatus(id: number | undefined) {
        return api.delete(`users/id/${id}/status`)
    }

    async deleteUserGroup(id: number | undefined, groupName: string | undefined) {
        return api.delete(`users/id/${id}/group/${groupName}`)
    }

    async AddGroup(id: number | undefined, groupName: string, Days: string, Priority: string) {
        return api.put<unknown, unknown, IAddGroup>(`users/id/${id}/group/${groupName}`, {
            days: Days,
            priority: Priority,
        })
    }

    async searchUser(data: string, pageID: number | undefined, type: 'NIK' | 'EMAIL'): Promise<IAllUser> {
        let response: AxiosResponse<IAllUser>;

        if (type === 'NIK') {
            response = await api.get<IAllUser>(`users/search/${data}/${pageID}`);
        } else if (type === 'EMAIL') {
            response = await api.get<IAllUser>(`users/search/email/${data}/${pageID}`);
        } else {
            throw new Error('Invalid type');
        }

        return response.data;
    }

}

export default new UserService()