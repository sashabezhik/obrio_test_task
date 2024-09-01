import { BaseError } from '../../../_core_/errors/base.error'

export class UserDoesNotExistError extends BaseError {
    constructor() {
        super({
            message: 'User does not exist',
            code: 'USER_DOES_NOT_EXIST'
        })
    }
}