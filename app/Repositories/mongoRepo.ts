import { MongoClient, Db } from "mongoDB";

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
  getOne() {
    console.log("");
  }
  async getMany(): Promise<any> {
    console.log("above return");
    return this.connection
      .collection("planters")
      .find({})
      .toArray((err: Error, results: Array<Object>) => {
        console.log("you are here");
        console.log(err);
        return JSON.stringify({ success: true, results });
      });
  }
  putOne() {
    console.log("");
  }
}
