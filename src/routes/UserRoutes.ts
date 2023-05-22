import { Router } from "express";
import RoutesInterface from "./interface/RoutesInterface";
import UserController from "../controllers/UserController";

class UserRoutes implements RoutesInterface {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("/", UserController.index);
    this.router.post("/", UserController.store);
    this.router.get("/:id", UserController.show);
    this.router.put("/:id/edit", UserController.delete);
    this.router.delete("/:id", UserController.delete);
  } 
}

export default new UserRoutes().router;
