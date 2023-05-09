import { Response, Request } from "express";
import { foodFrutas } from "../model/list-shema";
class FrutasController {
  //get all fruits
  public async fruitsAll(req: Request, res: Response): Promise<Response> {
    const searchFoodFrutas = await foodFrutas.find();
    return res.status(200).json(searchFoodFrutas);
  }
  //get unique id
  public async searchUniqueFruits(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { id } = req.params;
    const frutasSearch = await foodFrutas.findById(id);
    return res.status(200).json(frutasSearch);
  }
  //create
  public async fruitsCreate(req: Request, res: Response): Promise<Response> {
    try {
      const { category, frutas, name, text, image } = req.body;
      const fruitsCreate = await foodFrutas.create({
        category,
        frutas,
        name,
        text,
        image,
      });
      return res.status(200).json(fruitsCreate);
    } catch (e) {
      console.log(`error ${e}`);
      return res.status(401).json({ msg: "DATA NOT ENTERED" });
    }
  }
}
export const fruitsController = new FrutasController();
