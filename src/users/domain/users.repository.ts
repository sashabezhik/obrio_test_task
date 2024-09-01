import { CreateUserInput } from './inputs/create-user.input'
import { UserEntity } from './entities/user.entity'

export abstract class UsersRepository {
    public abstract createUser(input: CreateUserInput): Promise<UserEntity | null>
    public abstract checkIfUserExistsById(id: number): Promise<boolean>
}