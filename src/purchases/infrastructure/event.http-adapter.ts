import { Injectable } from '@nestjs/common'
import { EventAdapter } from './event.adapter'
import { PurchaseEntity } from '../domain/entities/purchase.entity'

@Injectable()
export class EventHttpAdapter implements EventAdapter {
    public async sendPurchaseCreatedEvent(entity: PurchaseEntity): Promise<void> {
        const { id, userId, offerId } = entity

        console.log('sending purchase created event...')
        console.log(`data -> id: ${id}, userId: ${userId}, offerId: ${offerId}`)
    }

    public async sendAstrologicalReportToUser(userId: number): Promise<void> {
        console.log(`sending astrological report to user: ${userId} ...`)
    }
}