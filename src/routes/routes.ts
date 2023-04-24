import { Router } from "express";
import { userControler } from "../controllers/userControlle";
const router = Router();

router.post("/user",(req, res) => {
    
    userControler.createUser
});
export { router };
