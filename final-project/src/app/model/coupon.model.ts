export class Coupon {
    id: number
    code: string
    value: number

    constructor(id: number, code: string, value: number) {
        this.id = id
        this.code = code
        this.value= value
    }
}