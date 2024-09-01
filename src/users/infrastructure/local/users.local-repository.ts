import { Injectable } from '@nestjs/common'
import { UsersRepository } from '../../domain/users.repository'
import { CreateUserInput } from '../../domain/inputs/create-user.input'
import { UserEntity } from '../../domain/entities/user.entity'
import { UserModel } from './user.model'

@Injectable()
export class UsersLocalRepository implements UsersRepository {
    private readonly _users: UserModel[] = []

    public async createUser(input: CreateUserInput): Promise<UserEntity | null> {
        if (this.checkIfUserExistsByEmail(input.email)) return null

        const user = new UserModel({ id: this._users.length + 1, ...input })
        this._users.push(user)

        return new UserEntity({
            marketingData: user.marketing_data,
            ...user,
        })
    }

    public async checkIfUserExistsById(id: number): Promise<boolean> {
        const userIdx = this._users.findIndex(user => user.id === id)
        return userIdx === -1 ? false : true
    }

    private checkIfUserExistsByEmail(email: string): boolean {
        const userIdx = this._users.findIndex(user => user.email === email)       
        return userIdx === -1 ? false : true
    }
}