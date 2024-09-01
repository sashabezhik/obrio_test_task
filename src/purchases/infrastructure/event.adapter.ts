import { PurchaseEntity } from '../domain/entities/purchase.entity'

export abstract class EventAdapter {
    public abstract sendPurchaseCreatedEvent(entity: PurchaseEntity): Promise<void>
    public abstract sendAstrologicalReportToUser(userId: number): Promise<void>
}