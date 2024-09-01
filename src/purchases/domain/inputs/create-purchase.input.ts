export class CreatePurchaseInput {
    public readonly userId: number
    public readonly offerId: number

    constructor(options: CreatePurchaseInput) {
        this.userId = options.userId
        this.offerId = options.offerId
    }
}