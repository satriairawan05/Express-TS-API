import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import UserRoutes from "./routes/UserRoutes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(helmet());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Home");
    });
    
    this.app.use("/api/v1/users", UserRoutes);
  }
}

const PORT: number = 8000;
const app = new App().app;

app.listen(PORT, () => {
  console.log("This app running in localhost:" + PORT)
});
