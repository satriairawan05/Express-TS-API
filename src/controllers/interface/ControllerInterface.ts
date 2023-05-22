import { Request, Response } from "express";

interface ControllerInterface {
  index(req: Request, res: Response): any;
  store(req: Request, res: Response): any;
  show(req: Request, res: Response): any;
  update(req: Request, res: Response): any;
  delete(req: Request, res: Response): any;
}

export default ControllerInterface;