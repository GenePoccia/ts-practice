import { ProductService } from "../Services/productService";

export class ProductController {
  private service: ProductService;
  constructor(service: ProductService) {
    this.service = service;
  }

  public async getMany(req: any, res: any): Promise<any> {
    try {
      const payload = await this.service.getProducts();
      res.json({
        payload,
        size: payload ? payload.length : "empty",
      });
    } catch (e) {
      console.log(e);
    }
  }
}
