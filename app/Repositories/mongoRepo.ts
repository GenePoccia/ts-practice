import { Db, MongoClient } from "mongoDB";

interface Repository {
  getOne: Function;
  getMany: Function;
  putOne: Function;
}

export class MongoRepo implements Repository {
  private connection: Db;
  constructor(mongo: MongoClient) {
    this.connection = mongo.db("dbName");
  }
  public getOne() {
    console.log("");
  }
  public async getMany(): Promise<any> {
    return await this.connection
      .collection("planters")
      .find({})
      .toArray();
  }
  public putOne() {
    console.log("");
  }
}
