import { ApiProperty } from '@nestjs/swagger'

export class BaseErrorResponse {
    @ApiProperty()
    public readonly message: string

    @ApiProperty()
    public readonly code: string

    constructor(options: BaseErrorResponse) {
        this.message = options.message
        this.code = options.code
    }
}