import { Module } from '@nestjs/common'
import { OffersService } from './domain/offers.service'
import { OffersRepository } from './domain/offers.repository'
import { OffersLocalRepository } from './infrastructure/local/offers.local-repository'

@Module({
    providers: [
        OffersService,
        {
            provide: OffersRepository,
            useClass: OffersLocalRepository
        }
    ],
    exports: [OffersService]
})
export class OffersModule {}