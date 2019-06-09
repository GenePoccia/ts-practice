import { MongoRepo } from "../Repositories/mongoRepo";

interface Planter {
  name: string;
  price: number;
  description: string;
}
interface Service {
  getProducts: Function;
}

export class ProductService {
  private repo: MongoRepo;
  constructor(productsRepo: MongoRepo) {
    this.repo = productsRepo;
  }
  async getProducts(): Promise<any> {
    console.log("inside service");
    return this.repo.getMany();
  }
}
