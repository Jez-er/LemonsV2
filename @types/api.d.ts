interface NewsCreateUpdate {
    header: string
    miniText: string
    text: string
    pictureName: string
}

interface NewsNewComment {
    text: string
}

interface MiniNews {
    id: number
    Header: string
    pictureURL: string
    miniText: string
}

interface NewsComments {
    id: number
    userId: number
    text: string
}

interface FullNews {
    id: number
    Header: string
    pictureURL: string
    miniText: string
    text: string
    comments: NewsComments
}

type NewsCreateUpdateRequest = NewsCreateUpdate
type MiniNewsResponse = MiniNews[]
type FullNewsResponse = FullNews
type NewsNewCommentRequest = NewsNewComment
