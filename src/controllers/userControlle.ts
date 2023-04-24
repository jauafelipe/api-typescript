import { Response, Request } from "express";

//usersScheme
import { modelUser } from "../model/UserSchema";

class ControllerUser {
  //req & post
  private req: Request;
  private res: Response;

  //started methods
  constructor() {}

  //create user
  public async createUser(req: Request, res: Response) {
    const user = await modelUser
      .create()
      .then((dates) => console.log(dates))
      .catch((e) => console.log(`error in controller create ${e}`));
    return res.json(user);
  }
}

export const userControler = new ControllerUser();
