import { UserRepo } from "../Repositories/userRepo";
import { RemoteUser } from "../../types/user"

export class UserService {
  private repo: UserRepo;
  constructor(usersRepo: UserRepo) {
    this.repo = usersRepo;
  }

  public async getUsers(): Promise<RemoteUser[]> {
    return await this.repo.getUser();
  }
}
