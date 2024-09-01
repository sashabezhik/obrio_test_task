import { Injectable } from '@nestjs/common'
import { SchedulerRegistry } from '@nestjs/schedule'

@Injectable()
export class SchedulerService {
    constructor(private readonly schedulerRegistry: SchedulerRegistry) {}

    public executeAfterTimeout(
        name: string, 
        milliseconds: number,
        callback: () => Promise<void>
    ): void {
        const timeout = setTimeout(async () => await callback(), milliseconds)
        this.schedulerRegistry.addTimeout(name, timeout)
    }
}