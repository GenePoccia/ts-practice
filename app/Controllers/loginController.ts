import { LoginService } from "../Services/loginService"

export class LoginController {
    private service: LoginService;
    constructor(service: LoginService) {
        this.service = service
    }

    public async login(req: any, res: any): Promise<void> {
        try {
            const payload = await this.service.login();
            res.json({payload, size: payload ? payload.length: "empty"})
        } catch (e) {
            console.log(e)
        }
    }
}