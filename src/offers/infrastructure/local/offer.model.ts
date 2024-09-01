export class OfferModel {
    public readonly id: number
    public readonly name: string
    public readonly price: number

    constructor(options: OfferModel) {
        this.id = options.id
        this.name = options.name
        this.price = options.price
    }
}