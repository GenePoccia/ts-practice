import { MongoRepo } from './mongoRepo'
import { MongoClient } from 'mongoDB'
import { RemoteSignup } from '../../types/signup'

export class SignupRepo extends MongoRepo {
    constructor(MongoClient: MongoClient) {
        super(MongoClient, "userinfo", 'users',)
    }

    public async signup(): Promise<RemoteSignup> {
        return await this.putOne()
    }
}

