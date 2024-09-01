import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger'
import { PurchasesService } from '../../domain/purchases.service'
import { CreatePurchaseInput } from '../../domain/inputs/create-purchase.input'
import { CreatePurchaseRequest } from './requests/create-purchase.request'
import { CreatePurchaseResponse } from './responses/create-purchase.response'

@ApiTags('purchases')
@Controller('purchases')
export class PurchasesRestController {
    constructor(private readonly service: PurchasesService) {}

    @Post('/')
    @ApiOperation({ description: 'create a purchase' })
    @ApiCreatedResponse({ type: CreatePurchaseResponse })
    public async createPurchase(@Body() request: CreatePurchaseRequest): Promise<CreatePurchaseResponse> {
        const input = new CreatePurchaseInput(request)
        const purchase = await this.service.createPurchase(input)

        return new CreatePurchaseResponse(purchase)
    }
}