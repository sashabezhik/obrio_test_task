export class PurchaseEntity {
    public readonly id: number
    public readonly userId: number
    public readonly offerId: number

    constructor(options: PurchaseEntity) {
        this.id = options.id
        this.userId = options.userId
        this.offerId = options.offerId
    }
}