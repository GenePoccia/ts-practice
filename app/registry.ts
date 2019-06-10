import { Application } from "express";
import { MongoClient } from "mongodb";
import { ProductController } from "../app/Controllers/productController";
import { MongoRepo } from "./Repositories/mongoRepo";
import { Server } from "./Server";
import { ProductService } from "./Services/productService";

export class Registry {
    public async getApp(): Promise<Application> {
        const url =
            "mongodb+srv://gene:panama13@cluster0-9verg.mongodb.net/test?retryWrites=true&w=majority";
        const connection = await MongoClient.connect(url, { useNewUrlParser: true});
        const repo = new MongoRepo(connection);
        const service = new ProductService(repo);
        const controller = new ProductController(service);
        const server = new Server(controller);

        await server.init();
        return server.app;
    }
}
