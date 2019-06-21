import { MongoRepo } from './mongoRepo'
import { MongoClient } from 'mongoDB'
import { RemoteCart } from '../../types/cart'

export class CartRepo extends MongoRepo {
    constructor(MongoClient: MongoClient) {
        super(MongoClient, "userCart", "cart")
    }

    public async getCart(): Promise<RemoteCart[]> {
        return await this.getMany();
    }
}