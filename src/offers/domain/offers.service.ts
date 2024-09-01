import { Injectable } from '@nestjs/common'
import { OffersRepository } from './offers.repository'

@Injectable()
export class OffersService {
    constructor(private readonly repository: OffersRepository) {}

    public checkIfOfferExistsById(id: number): Promise<boolean> {
        return this.repository.checkIfOfferExistsById(id)
    }
}