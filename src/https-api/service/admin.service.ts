import {api} from "../index.ts";
import {IBanUser} from "../interface/auth.interface.ts";


class AdminService {
    async unban(id: number | undefined) {
        const data = api.post(`admin/moderation/unban/${id}`, {})
        console.log(data)
        return data
    }
    async ban(id: number | undefined, reason: string, endData: string, forever: boolean, iron: boolean) {
        const data = api.post<unknown, unknown, IBanUser>(`admin/moderation/ban/${id}`,
            {
                reason: reason,
                isHardware: iron,
                endDate: forever ? null : endData
            }
            )
        return data
    }
}

export default new AdminService()