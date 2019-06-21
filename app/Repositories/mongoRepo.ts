import { Db, MongoClient } from "mongoDB";

interface Repository {
  getOne: Function;
  getMany: Function;
  putOne: Function;
}

export class MongoRepo implements Repository {
  private connection: Db;
  private collection: string;
  private database: string
  constructor(mongo: MongoClient, collection: string, database: string) {
    this.connection = mongo.db(database);
    this.collection = collection;
    this.database = database
  }
  public async getOne(): Promise<any> {
    
    return await this.connection.collection(this.collection).findOne({});
  }
  public async getMany<T>(): Promise<T> {
    
    return <T>(<unknown>await this.connection
      .collection(this.collection)
      .find({})
      .toArray());
  }
  public async putOne() {
    
  }
}


