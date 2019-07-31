import { MongoRepo } from './mongoRepo'
import { MongoClient } from 'mongoDB'
import { RemoteLogin } from '../../types/login'

export class LoginRepo extends MongoRepo {
    constructor(MongoClient: MongoClient) {
        super(MongoClient, "userinfo", 'users')
    }

    public async login(): Promise<RemoteLogin> {
        return await this.getMany()
    }
}

