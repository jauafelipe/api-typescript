import { Request, Response, NextFunction } from "express";
class GlobalMiddleware {
  public corsConfigs(req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next()
  }
}

export const global = new GlobalMiddleware().corsConfigs;
