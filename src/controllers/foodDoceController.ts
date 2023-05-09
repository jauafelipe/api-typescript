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

export const foodController = new FoodDoceController();
