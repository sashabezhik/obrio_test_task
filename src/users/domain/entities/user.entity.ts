export class UserEntity {
    public readonly id: number
    public readonly email: string
    public readonly marketingData: string

    constructor(options: UserEntity) {
        this.id = options.id
        this.email = options.email
        this.marketingData = options.marketingData
    }
}