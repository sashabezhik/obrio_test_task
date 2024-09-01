import { Injectable } from '@nestjs/common'
import { UsersService } from '../../users/domain/users.service'
import { OffersService } from '../../offers/domain/offers.service'
import { PurchasesRepository } from './purchases.repository'
import { CreatePurchaseInput } from './inputs/create-purchase.input'
import { PurchaseEntity } from './entities/purchase.entity'
import { UserDoesNotExistError } from '../../users/domain/errors/user-does-not-exist.error'
import { OfferDoesNotExistError } from '../../offers/domain/errors/offer-does-not-exist.error'

@Injectable()
export class PurchasesService {
    constructor(
        private readonly usersService: UsersService,
        private readonly offersService: OffersService,
        private readonly repository: PurchasesRepository
    ) {}

    public async createPurchase(input: CreatePurchaseInput): Promise<PurchaseEntity> {
        if (!await this.usersService.checkIfUserExistsById(input.userId))
            throw new UserDoesNotExistError()

        if (!await this.offersService.checkIfOfferExistsById(input.offerId))
            throw new OfferDoesNotExistError()
        
        const purchase = await this.repository.createPurchase(input)

        await this.repository.sendPurchaseCreatedEvent(purchase)
        this.repository.scheduleUserReport(purchase.id, purchase.userId)

        return purchase
    }
}