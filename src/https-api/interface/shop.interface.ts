export interface IShop {
    id: number
    server: string
    price: number
    currency: string
    displayName: string
    description: string
    pictureUrl: string
    limitations: {
        endDate: string | null
        count: number
        groupName: string | null
    }
}

export interface IAllShopItems {
    data: IShop[]
    pageSize: number,
    "totalPages": number,
    "totalElements": number
}