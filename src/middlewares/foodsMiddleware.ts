import {Request, Response, NextFunction} from "express"
import { foodsModel } from "../model/list-shema";


class FoodsVerify {
  public async verifyDatasFood(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | unknown> {
    const { category, doce, name, text, image } = req.body;
    const foods = await foodsModel.find();
    const filterFoods = foods.filter((i) => {
      i.category === category &&
        i.category.doce === doce &&
        i.category.doce.image === image &&
        i.category.doce.name === name &&
        i.category.doce.text === text;
    });
    if (filterFoods.length > 0) {
      return res.status(400).json({ msg: "Datas existing" });
    }
    next();
  }
}

export const verifyFoodsDatas = new FoodsVerify().verifyDatasFood;
