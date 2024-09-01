import { Injectable } from '@nestjs/common'
import { PurchasesRepository } from '../../domain/purchases.repository'
import { EventAdapter } from '../event.adapter'
import { SchedulerService } from '../../../_core_/scheduler/scheduler.service'
import { CreatePurchaseInput } from '../../domain/inputs/create-purchase.input'
import { PurchaseEntity } from '../../domain/entities/purchase.entity'
import { PurchaseModel } from './purchase.model'

@Injectable()
export class PurchasesLocalRepository implements PurchasesRepository {
    private readonly _purchases: PurchaseModel[] = []
    private readonly twentyFourHoursInMilliseconds = 86400000

    constructor(
        private readonly eventAdapter: EventAdapter,
        private readonly schedulerService: SchedulerService
    ) {}

    public async createPurchase(input: CreatePurchaseInput): Promise<PurchaseEntity> {
        const purchase = new PurchaseModel({ id: this._purchases.length + 1, ...input })
        this._purchases.push(purchase)

        return new PurchaseEntity({
            id: purchase.id,
            userId: purchase.user_id,
            offerId: purchase.offer_id
        })
    }

    public sendPurchaseCreatedEvent(entity: PurchaseEntity): Promise<void> {
        return this.eventAdapter.sendPurchaseCreatedEvent(entity)
    }

    public scheduleUserReport(purchaseId: number, userId: number): void {
        this.schedulerService.executeAfterTimeout(
            purchaseId.toString(),
            this.twentyFourHoursInMilliseconds,
            async (): Promise<void> => {
                await this.eventAdapter.sendAstrologicalReportToUser(userId)
            }
        )
    }
}