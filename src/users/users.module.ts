import { Module } from '@nestjs/common'
import { UsersRestController } from './presentation/rest/users.rest-controller'
import { UsersService } from './domain/users.service'
import { UsersRepository } from './domain/users.repository'
import { UsersLocalRepository } from './infrastructure/local/users.local-repository'

@Module({
    controllers: [UsersRestController],
    providers: [
        UsersService,
        {
            provide: UsersRepository,
            useClass: UsersLocalRepository
        }
    ],
    exports: [UsersService]
})
export class UsersModule {}