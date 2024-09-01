import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, IsNotEmpty } from 'class-validator'

export class CreateUserRequest {
    @ApiProperty()
    @IsEmail()
    public readonly email: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public readonly marketingData: string
}