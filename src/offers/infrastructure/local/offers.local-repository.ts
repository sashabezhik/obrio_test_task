import { Injectable } from '@nestjs/common'
import { OffersRepository } from '../../domain/offers.repository'
import { OfferModel } from './offer.model'

@Injectable()
export class OffersLocalRepository implements OffersRepository {
    private readonly _offers: OfferModel[]

    constructor() {
        this._offers = [
            new OfferModel({ id: 1, name: 'test_offer_1', price: 100 }),
            new OfferModel({ id: 2, name: 'test_offer_2', price: 200 }),
            new OfferModel({ id: 3, name: 'test_offer_3', price: 300 }),
            new OfferModel({ id: 4, name: 'test_offer_4', price: 400 }),
            new OfferModel({ id: 5, name: 'test_offer_5', price: 500 }),
        ]
    }

    public async checkIfOfferExistsById(id: number): Promise<boolean> {
        const offerIdx = this._offers.findIndex(offer => offer.id === id)
        return offerIdx === -1 ? false : true
    }
}