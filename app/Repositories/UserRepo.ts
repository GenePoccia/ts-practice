import { MongoRepo } from "./mongoRepo";
import { Db, MongoClient } from "mongoDB";
import { RemoteUser } from "../../types/user"

export class UserRepo extends MongoRepo {
  constructor(MongoClient: MongoClient) {
    super(MongoClient, "userinfo", "users");
  }

  public async getUser(): Promise<RemoteUser[]> {
    console.log('inside user repo')
    return await this.getMany();
  }
}
