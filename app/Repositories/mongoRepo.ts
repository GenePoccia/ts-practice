import { Db, MongoClient } from "mongoDB";

interface Repository {
  getOne: Function;
  getMany: Function;
  putOne: Function;
  getUsers: Function
}

export class MongoRepo implements Repository {
  private connection: Db;
  constructor(mongo: MongoClient) {
    this.connection = mongo.db("dbName");
  }
  public async getOne(): Promise<any> {
    return await this.connection
    .collection("planters")
    .findOne({})
    
  }
  public async getMany(): Promise<any> {
    return await this.connection
      .collection("planters")
      .find({})
      .toArray();
  }
  public async putOne() {
    console.log("");
  }

  public async getUsers() {
    console.log('get user here')
  }
}
