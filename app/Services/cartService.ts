import { CartRepo } from "../Repositories/cartRepo"
import { RemoteCart } from "../../types/cart"

interface Service {
    getCart: Function
}

export class CartService {
    private repo: CartRepo;
    constructor(cartRepo: CartRepo) {
        this.repo = cartRepo
    }

    public async getCart(): Promise<RemoteCart[]> {
        return await this.repo.getMany<RemoteCart[]>()
    }
}