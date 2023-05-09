import dotenv from "dotenv";
dotenv.config();
import express from "express";
import * as bodyParser from "body-parser";
import mongoose, { MongooseOptions } from "mongoose";
import cors from "cors";

import { router } from "./routes/routes";

class App {
  public app: express.Application;
  public constructor() {
    this.app = express();
    this.middleware();
    this.routes();
    this.database();
    this.server();
  }

  //middleware
  private middleware(): void {
    this.app.use(bodyParser.json());
    this.app.use(cors({ credentials: true }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  //routes
  private routes(): void {
    this.app.use(router);
  }

  //conection database
  private async database(): Promise<void> {
    const mongdb: string = process.env.CONNECTION_STRING || "";
    await mongoose
      .connect(mongdb, {
        useNewUrlParser: true,
      } as MongooseOptions)
      .then(() => console.log("conectado"))
      .catch((e) => console.log("error", e));
  }
  //server
  private server(): void {
    this.app.listen(4000, () => {
      console.log("http://localhost:4000");
    });
  }
}
export default new App().app;
