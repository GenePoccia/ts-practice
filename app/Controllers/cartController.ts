import { CartService } from "../Services/cartService"

export class CartController {
    private service: CartService;
    constructor(service: CartService) {
        this.service = service
    }

    public async getCart(req: any, res: any): Promise<void> {
        try {
          const payload = await this.service.getCart();
          res.json({
            payload,
            size: payload ? payload.length : "empty"
          });
        } catch (e) {
          console.log(e);
        }
      }
    }