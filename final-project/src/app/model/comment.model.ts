export class Comment {
    id: number
    author: string
    comment: string

    constructor(id: number, author: string, comment: string) {
        this.id = id
        this.author = author
        this.comment = comment
    }
}
