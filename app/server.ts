import express = require("express");
import multer = require("multer");
import cors = require("cors");
import bodyParser = require("body-parser");
import { MongoClient } from "mongodb";
import { ProductController } from "../app/Controllers/productController";
import { ProductService } from "./Services/productService";
import { MongoRepo } from "./Repositories/mongoRepo";

export class Server {
  public app: express.Application;
  private controller: ProductController;
  constructor(controller: ProductController) {
    this.controller = controller;
    this.app = express();
  }
  init() {
    //express
    const { app } = this;
    //multer
    const UPLOAD_PATH = "uploads";
    const upload = multer({ dest: `${UPLOAD_PATH}/` });
    //cors
    app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
    //bodyParser
    app.use(bodyParser());

    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    app.get("/planter", (req, res) => this.controller.getMany(req, res));
    this.app = app;
  }
}
try {
  (async function() {
    const url =
      "mongodb+srv://gene:panama13@cluster0-9verg.mongodb.net/test?retryWrites=true&w=majority";
    MongoClient.connect(url, async (err, allDbs) => {
      console.log(err);
      if (err) {
        throw new Error(err.message);
      }
      const repo = new MongoRepo(allDbs);
      const service = new ProductService(repo);
      const controller = new ProductController(service);
      const server = new Server(controller);

      await server.init();

      server.app.listen(4000, () => {
        console.log("Listening on port 4000");
      });
    });
  })();
} catch (e) {
  console.log(e);
}
