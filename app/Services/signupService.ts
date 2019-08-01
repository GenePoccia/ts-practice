import { SignupRepo } from '../Repositories/signupRepo'
import { RemoteSignup } from "../../types/signup"

export class SignupService {
    private repo: SignupRepo;
    constructor(signupRepo: SignupRepo) {
        this.repo = signupRepo
    }

    public async signup(): Promise<RemoteSignup[]> {
        return await this.repo.putOne()
    }
}