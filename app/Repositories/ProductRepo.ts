import { MongoRepo } from "./mongoRepo";
import { Db, MongoClient } from "mongoDB";
import { RemotePlanter } from "../../types/planter";

export class ProductRepo extends MongoRepo {
  constructor(MongoClient: MongoClient) {
    super(MongoClient, "planters", "items");
  }

  public async getProducts(): Promise<RemotePlanter[]> {
    return await this.getMany();
  }
}
