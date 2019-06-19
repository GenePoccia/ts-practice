import { MongoRepo } from "./mongoRepo";
import { Db, MongoClient } from "mongoDB";

export class UserRepo extends MongoRepo {
  constructor(MongoClient: MongoClient) {
    super(MongoClient, "users");
  }

  public async getUser(): Promise<any> {
    return await {};
  }
}
