import { Router } from "express";
//controller
import { categoriesControler } from "../controllers/categoriesController";
import { foodController } from "../controllers/foodDoceController";
import { fruitsController } from "../controllers/frutasController";
import { verdurasController } from "../controllers/verdurasController";

//mid verify
import { verifyDatas } from "../middlewares/postMiddleware";
import { verifyFoodsDatas } from "../middlewares/foodsMiddleware";
const router = Router();

//             category card router
router.get("/card", categoriesControler.postSearch);
router.get("/card/:id", categoriesControler.postSearchUnique);
router.post("/user", verifyDatas, categoriesControler.postCreater);
//             foods doce
router.get("/foods/doce", foodController.searchFood);
router.get("/foods/doce/:id", foodController.searchUniqueFood);
router.post("/foods/doce", verifyFoodsDatas, foodController.foodCreate);

//             food frutas
router.get("/foods/frutas", fruitsController.fruitsAll);
router.get("/foods/frutas/:id",fruitsController.searchUniqueFruits);
router.post("/foods/frutas",fruitsController.fruitsCreate);

//            food verduras
router.get("/foods/verduras", verdurasController.verdurasSeach)
router.get("/foods/verduras/:id")
router.post("/foods/verduras", verdurasController.verdurasCreate)
















export { router };
