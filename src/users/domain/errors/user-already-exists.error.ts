import { BaseError } from '../../../_core_/errors/base.error'

export class UserAlreadyExistsError extends BaseError {
    constructor() {
        super({
            message: 'User already exists',
            code: 'USER_ALREADY_EXISTS'
        })
    }
}