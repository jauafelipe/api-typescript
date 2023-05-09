import { Response, Request } from "express";

//usersScheme
import { postModel } from "../model/list-shema";

class CategoriesController {
  //search user
  public async postSearch(req: Request, res: Response): Promise<Response> {
    //find all documents
    const search = await postModel.find();
    return res.json(search);
  }
  //search for user by unique id
  public async postSearchUnique(
    req: Request,
    res: Response
  ): Promise<Response> {
    //specific id
    const { id } = req.params;
    const user = await postModel.findById(id);
    return res.status(200).json(user);
  }

  //create user
  public async postCreater(req: Request, res: Response): Promise<Response> {
    try {
      const { name, image, text } = req.body;
      const user = await postModel.create({ name, image, text });
      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
      return res.status(401).json({ msg: "DATA NOT CREATED" });
    }
  }
}

export const categoriesControler = new CategoriesController();
