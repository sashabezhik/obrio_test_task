interface IOptions {
    id: number
    email: string
    marketingData: string
}

export class UserModel {
    public readonly id: number
    public readonly email: string
    public readonly marketing_data: string

    constructor(options: IOptions) {
        this.id = options.id
        this.email = options.email
        this.marketing_data = options.marketingData
    }
}