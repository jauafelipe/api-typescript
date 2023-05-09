import { Request, Response } from "express";
import { foodVerduras } from "../model/list-shema";

class VerdurasController {
  public async verdurasSeach(req: Request, res: Response) {
    const verduras = await foodVerduras.find();
    return res.status(200).json(verduras);
  }
  public async verdurasSeachUniqueId(req: Request, res: Response) {
    const { id } = req.params;
    const uniqueId = await foodVerduras.findById(id);
    return res.status(200).json(uniqueId);
  }
  public async verdurasCreate(req: Request, res: Response) {
    try {
      const { category, verduras, name, image, text } = req.body;
      const create = await foodVerduras.create({
        category,
        verduras,
        name,
        text,
        image,
      });
      return res.status(200).json(create);
    } catch (e) {
      console.log(`ERROR:${e}`);
      return res.status(400).json({ msg: "ERROR IN CREATE" });
    }
  }
}
export const verdurasController = new VerdurasController();
