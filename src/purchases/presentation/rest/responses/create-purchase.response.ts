import { ApiProperty } from '@nestjs/swagger'

export class CreatePurchaseResponse {
    @ApiProperty()
    public readonly id: number

    @ApiProperty()
    public readonly userId: number

    @ApiProperty()
    public readonly offerId: number

    constructor(options: CreatePurchaseResponse) {
        this.id = options.id
        this.userId = options.userId
        this.offerId = options.offerId
    }
}