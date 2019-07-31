import { LoginRepo } from '../Repositories/loginRepo'
import { RemoteLogin } from "../../types/login"

export class LoginService {
    private repo: LoginRepo;
    constructor(loginRepo: LoginRepo) {
        this.repo = loginRepo
    }

    public async login(): Promise<RemoteLogin[]> {
        return await this.repo.putOne()
    }
}