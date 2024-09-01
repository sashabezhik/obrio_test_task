import { ApiProperty } from '@nestjs/swagger'

export class CreateUserResponse {
    @ApiProperty()
    public readonly id: number

    @ApiProperty()
    public readonly email: string

    @ApiProperty()
    public readonly marketingData: string

    constructor(options: CreateUserResponse) {
        this.id = options.id
        this.email = options.email
        this.marketingData = options.marketingData
    }
}