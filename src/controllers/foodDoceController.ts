import { Request, Response } from "express";
import { foodFrutas, foodVerduras, foodsModel } from "../model/list-shema";

class FoodDoceController {
  public async searchFood(req: Request, res: Response): Promise<Response> {
    const foodSeach = await foodsModel.find();
    return res.status(200).json(foodSeach);
  }

  public async searchUniqueFood(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { id } = req.params;
    const foodSeach = await foodsModel.findById(id);
    return res.status(200).json(foodSeach);
  }
  public async foodCreate(req: Request, res: Response): Promise<Response> {
    try {
      const { category, doce, name, text, image } = req.body;
      const foodCreate = await foodsModel.create({
        category,
        doce,
        name,
        text,
        image,
      });
      return res.status(200).json(foodCreate);
    } catch (e) {
      console.log(`FOOD ERROR ${e}`);
      return res.status(401).json({ msg: "DATA NOT ENTERED" });
    }
  }
}

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
export const fruitsController = new FrutasController();
export const foodController = new FoodDoceController();
