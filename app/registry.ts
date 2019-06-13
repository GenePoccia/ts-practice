import { Application } from "express";
import { MongoClient } from "mongodb";
import { ProductController } from "../app/Controllers/productController";
import { MongoRepo } from "./Repositories/mongoRepo";
import { Server } from "./Server";
import { ProductService } from "./Services/productService";
import { UserController } from '../app/Controllers/userController'
import { UserService } from './Services/userService'

export class Registry {
    public async getApp(): Promise<Application> {
        //mongoRepo setup
        const url =
            "mongodb+srv://gene:panama13@cluster0-9verg.mongodb.net/test?retryWrites=true&w=majority";
       
        const connection = await MongoClient.connect(url, { useNewUrlParser: true});
        const repo = new MongoRepo(connection);
        //services
        const service = new ProductService(repo);
        const userService = new UserService(repo)
        //controllers
        const controller = new ProductController(service);
        const userController = new UserController(userService)
        //servers
        const server = new Server(controller, userController);

        await server.init();
        return server.app;
    }
}
