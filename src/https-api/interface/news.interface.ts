export interface NewsCreateUpdate {
    header: string
    miniText: string
    text: string
    pictureName: string
}

export interface NewsNewComment {
    text: string
}

export interface MiniNews {
    id: number
    Header: string
    pictureURL: string
    miniText: string
}

export interface NewsComments {
    id: number
    userId: number
    text: string
}

export interface FullNews {
    id: number
    Header: string
    pictureURL: string
    miniText: string
    text: string
    comments: NewsComments
}