import { CreatePurchaseInput } from './inputs/create-purchase.input'
import { PurchaseEntity } from './entities/purchase.entity'

export abstract class PurchasesRepository {
    public abstract createPurchase(input: CreatePurchaseInput): Promise<PurchaseEntity>
    public abstract sendPurchaseCreatedEvent(entity: PurchaseEntity): Promise<void>
    public abstract scheduleUserReport(purchaseId: number, userId: number): void
}