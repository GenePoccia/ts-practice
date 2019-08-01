import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import multer from "multer";
import { ProductController } from "./Controllers/productController";
import { UserController } from './Controllers/userController'
import { CartController } from './Controllers/cartController'
import { SignupController } from './Controllers/signupController'

export class Server {
  public app: Application;
  private productController: ProductController;
  private userController: UserController;
  private cartController: CartController;
  private signupController: SignupController;

  constructor(productController: ProductController, userController: UserController, cartController: CartController, signupController: SignupController) {
    this.productController = productController;
    this.userController = userController;
    this.cartController = cartController;
    this.signupController = signupController;
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

    //mainpage
    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    //planters
    app.get("/planters", async (req, res) => {
      await this.productController.getMany(req, res);
    });
    
    //users
    app.get('/user', async (req,res) => {
      await this.userController.getUser(req, res)
    })

    app.get('/cart', async (req,res) => {
      await this.cartController.getCart(req, res)
    })
     app.post('/login', upload.none(), async (req, res) => {
       await this.signupController.signup(req, res)
     })

    this.app = app;
  }
}
