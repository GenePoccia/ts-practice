import { ProductRepo } from "../Repositories/productRepo";
import { RemotePlanter } from "../../types/planter";

interface Service {
  getProducts: Function;
}

export class ProductService {
  private repo: ProductRepo;
  constructor(productsRepo: ProductRepo) {
    this.repo = productsRepo;
  }
  public async getProducts(): Promise<RemotePlanter[]> {
    return await this.repo.getMany<RemotePlanter[]>();
  }

}
