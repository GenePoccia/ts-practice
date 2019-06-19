import { UserRepo } from "../Repositories/userRepo";

export class UserService {
  private repo: UserRepo;
  constructor(usersRepo: UserRepo) {
    this.repo = usersRepo;
  }

  public async getUsers(): Promise<any> {
    return await this.repo.getUser();
  }
}
