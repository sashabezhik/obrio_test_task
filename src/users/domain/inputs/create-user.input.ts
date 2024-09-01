export class CreateUserInput {
    public readonly email: string
    public readonly marketingData: string

    constructor(options: CreateUserInput) {
        this.email = options.email
        this.marketingData = options.marketingData
    }
}