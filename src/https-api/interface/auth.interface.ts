export interface IAuth {
    accessToken: string
    refreshToken: string
}

export interface IUserGroups {
    id: number
    groupName: string
}
export interface IUserInfo {
    id: number
    username: string
    uuid: string
    gender: string
    status: string
    registrationDate: string
    groups: IUserGroups[]
    assets: {
        skin: {
            url: string
            digest: string
            metadata: unknown
        }
        cape: {
            url: string
            digest: string
            metadata: unknown
        }
    }
}

export interface IBanUser {
    reason: string
    endDate: string | null
    isHardware: boolean
}