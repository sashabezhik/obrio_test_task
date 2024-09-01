import { Module } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'
import { UsersModule } from './users/users.module'
import { PurchasesModule } from './purchases/purchases.module'
import { OffersModule } from './offers/offers.module'
import { BaseErrorFilter } from './_core_/errors/base-error.filter'

@Module({
    imports: [UsersModule, PurchasesModule, OffersModule],
    providers: [
        {
            provide: APP_FILTER,
            useClass: BaseErrorFilter
        }
    ]
})
export class AppModule {}