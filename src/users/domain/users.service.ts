import { Injectable } from '@nestjs/common'
import { UsersRepository } from './users.repository'
import { CreateUserInput } from './inputs/create-user.input'
import { UserEntity } from './entities/user.entity'
import { UserAlreadyExistsError } from './errors/user-already-exists.error'

@Injectable()
export class UsersService {
    constructor(private readonly repository: UsersRepository) {}

    public async createUser(input: CreateUserInput): Promise<UserEntity> {
        const user = await this.repository.createUser(input)
        if (!user) throw new UserAlreadyExistsError()

        return user
    }

    public checkIfUserExistsById(id: number): Promise<boolean> {
        return this.repository.checkIfUserExistsById(id)
    }
}