import { ApiProperty } from '@nestjs/swagger'
import { IsPositive } from 'class-validator'

export class CreatePurchaseRequest {
    @ApiProperty()
    @IsPositive()
    public readonly userId: number
    
    @ApiProperty()
    @IsPositive()
    public readonly offerId: number
}