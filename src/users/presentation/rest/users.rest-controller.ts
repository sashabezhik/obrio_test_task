import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger'
import { UsersService } from '../../domain/users.service'
import { CreateUserInput } from '../../domain/inputs/create-user.input'
import { CreateUserRequest } from './requests/create-user.request'
import { CreateUserResponse } from './responses/create-user.response'

@ApiTags('users')
@Controller('users')
export class UsersRestController {
    constructor(private readonly service: UsersService) {}

    @Post('/')
    @ApiOperation({ description: 'create a user' })
    @ApiCreatedResponse({ type: CreateUserResponse })
    public async createUser(@Body() request: CreateUserRequest): Promise<CreateUserResponse> {
        const input = new CreateUserInput(request)
        const user = await this.service.createUser(input)

        return new CreateUserResponse(user)
    }
}