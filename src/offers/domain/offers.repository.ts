export abstract class OffersRepository {
    public abstract checkIfOfferExistsById(id: number): Promise<boolean>
}