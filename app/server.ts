import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import multer from "multer";
import { ProductController } from "./Controllers/productController";

export class Server {
  public app: Application;
  private controller: ProductController;
  constructor(controller: ProductController) {
    this.controller = controller;
    this.app = express();
  }
  public init() {
    // express
    const { app } = this;
    // multer
    const UPLOAD_PATH = "uploads";
    const upload = multer({ dest: `${UPLOAD_PATH}/` });
    // cors
    app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
    // bodyParser
    app.use(bodyParser());

    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    app.get("/planter", async (req, res) => {
      await this.controller.getMany(req, res);
    });

    this.app = app;
  }
}
