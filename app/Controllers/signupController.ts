import { SignupService } from "../Services/signupService"

export class SignupController {
    private service: SignupService;
    constructor(service: SignupService) {
        this.service = service
    }

    public async signup(req: any, res: any): Promise<void> {
        try {
            const payload = await this.service.signup();
            res.json({payload, size: payload ? payload.length: "empty"})
        } catch (e) {
            console.log(e)
        }
    }
}