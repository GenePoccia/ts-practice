import { UserService } from '../Services/userService'

export class UserController {
    private service: UserService;
    constructor(service: UserService) {
        this.service = service
    }

    public async getUser(req:any, res:any): Promise <void> {
        try {
            const payload = await this.service.getUsers();
            res.json({payload, size: payload ? payload.length: 'empty'})
        } catch (e) {
            console.log(e)
        }
    }
}