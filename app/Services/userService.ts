import { MongoRepo } from '../Repositories/mongoRepo'

export class UserService {
    private repo: MongoRepo
    constructor(usersRepo: MongoRepo) {
        this.repo = usersRepo
    }

    public async getUsers(): Promise<any> {
        return await this.repo.getUsers();
    }
}