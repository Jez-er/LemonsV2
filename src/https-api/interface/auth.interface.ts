export interface IAuth {
    accessToken: string
    refreshToken: string
}

interface UserGroups {
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
    groups: UserGroups[]
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