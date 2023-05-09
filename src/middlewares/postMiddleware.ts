import {Request, Response, NextFunction} from "express"
import { postModel } from "../model/list-shema";

//verify existing post
class PostVerification {
  public async verifyPostDatas(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<unknown> {
    const posts = await postModel.find(); //all poster model
    const { name, image } = req.body;
    //filter all
    const filterPosters = posts.filter(
      (posts) => posts.name === name && posts.image === image
    );
    if (filterPosters.length > 0) {
      return res
        .status(400)
        .json({ msg: "Post already exists", filterPosters });
    }
    next();
  }
}

export const verifyDatas = new PostVerification().verifyPostDatas;
