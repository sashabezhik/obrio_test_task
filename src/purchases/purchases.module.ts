import { Module } from '@nestjs/common'
import { CoreModule } from '../_core_/core.module'
import { UsersModule } from '../users/users.module'
import { OffersModule } from '../offers/offers.module'
import { PurchasesRestController } from './presentation/rest/purchases.rest-controller'
import { PurchasesService } from './domain/purchases.service'
import { PurchasesRepository } from './domain/purchases.repository'
import { PurchasesLocalRepository } from './infrastructure/local/purchases.local-repository'
import { EventAdapter } from './infrastructure/event.adapter'
import { EventHttpAdapter } from './infrastructure/event.http-adapter'

@Module({
    imports: [CoreModule, UsersModule, OffersModule],
    controllers: [PurchasesRestController],
    providers: [
        PurchasesService,
        {
            provide: PurchasesRepository,
            useClass: PurchasesLocalRepository
        },
        {
            provide: EventAdapter,
            useClass: EventHttpAdapter
        }
    ]
})
export class PurchasesModule {}