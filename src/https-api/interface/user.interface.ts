export interface AllUsers {
    id: number,
    username: string,
    uuid: string,
    gender: string,
    status: string,
    registrationDate: string,
    groups: null,
    assets: {
        skin: {
            url: string,
            digest: string,
            metadata: string
        },
        cape: {
            url: string,
            digest: string,
            metadata: string
        }
    },
    permissions: null
}

export interface IAllUser {
    data: AllUsers[]
    pageSize: number,
    "totalPages": number,
    "totalElements": number
}

export interface IAddGroup {
    days: string
    priority: string
}