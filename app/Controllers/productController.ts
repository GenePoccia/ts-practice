import { ProductService } from "../Services/productService";

export class ProductController {
  private service: ProductService;
  constructor(service: ProductService) {
    this.service = service;
  }

  async getMany(req: any, res: any): Promise<any> {
    console.log("inside controller");
    res.json(await this.service.getProducts());
  }
}
