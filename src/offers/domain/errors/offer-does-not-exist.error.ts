import { BaseError } from '../../../_core_/errors/base.error'

export class OfferDoesNotExistError extends BaseError {
    constructor() {
        super({
            message: 'Offer does not exist',
            code: 'OFFER_DOES_NOT_EXIST'
        })
    }
}