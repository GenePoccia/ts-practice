import { Application } from "express";
import { MongoClient } from "mongodb";
import { ProductController } from "./Controllers/productController";
import { MongoRepo } from "./Repositories/mongoRepo";
import { Server } from "./Server";
import { ProductService } from "./Services/productService";
import { UserController } from "./Controllers/userController";
import { UserService } from "./Services/userService";
import { UserRepo } from "./Repositories/UserRepo";
import { ProductRepo } from "./Repositories/ProductRepo";
import { CartController } from "./Controllers/cartController";
import { CartRepo } from "./Repositories/cartRepo";
import { CartService } from "./Services/cartService"

export class Registry {
  public async getApp(): Promise<Application> {
    //mongoRepo setup
    const url =
      "mongodb+srv://gene:panama13@cluster0-9verg.mongodb.net/test?retryWrites=true&w=majority";

    const connection = await MongoClient.connect(url, {
      useNewUrlParser: true
    });
    const userRepo = new UserRepo(connection);
    const productRepo = new ProductRepo(connection);
    const cartRepo = new CartRepo(connection)
    //services
    const productService = new ProductService(productRepo);
    const userService = new UserService(userRepo);
    const cartService = new CartService(cartRepo)
    //controllers
    const controller = new ProductController(productService);
    const userController = new UserController(userService);
    const cartController = new CartController(cartService)
    //servers
    const server = new Server(controller, userController, cartController);

    await server.init();
    return server.app;
  }
}
