import express from "express";
import * as bodyParser from "body-parser"
//routers
import { router } from "./routes/routes";
//middlewares
import { global } from "./middlewares/globalMiddleware";
//env
import dotenv from "dotenv";
dotenv.config();
//mongo
import mongoose, { MongooseOptions } from "mongoose";
import { userControler } from "./controllers/userControlle";

class App {
  public app: express.Application;
  public constructor() {
    this.app = express();
    this.middleware();
    this.routes();
    this.config()
    this.database();
    this.server()
  }

  private middleware(): void {
    this.app.use(global)
  }
  
  private routes(): void {
    this.app.use(router);
  }

  public config():void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }))
    
  }

  private database(): void {
    const mongdb: string = process.env.CONNECTION_STRING || "";
    mongoose
      .connect(mongdb, {
        useNewUrlParser: true,
      } as MongooseOptions)
      .then(() => console.log("conectado"))
      .catch((e) => console.log("error", e));
  }

  private server(): void {
    this.app.listen(4000, () => {
      console.log("http://localhost:4000");
    });
    
  }
}

export default new App().app;
