interface IOptions {
    id: number
    userId: number
    offerId: number
}

export class PurchaseModel {
    public readonly id: number
    public readonly user_id: number
    public readonly offer_id: number

    constructor(options: IOptions) {
        this.id = options.id
        this.user_id = options.userId
        this.offer_id = options.offerId
    }
}