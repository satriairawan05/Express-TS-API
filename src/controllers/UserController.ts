import { Request, Response } from "express";
import ControllerInterface from "./interface/ControllerInterface";

let data: any[] = [
  { id: 1, name: "Adi"},
  { id: 2, name: "Budi"},
  { id: 3, name: "Chandra"},
  { id: 4, name: "Dono"},
  { id: 5, name: "Edi"},
  { id: 6, name: "Fendi"},
  { id: 7, name: "Ghazali"},
  { id: 8, name: "Husein"},
  { id: 9, name: "Ismail"},
  { id: 10, name: "Juli"}
]

class UserController implements ControllerInterface {
  index(req: Request, res: Response) {
    return res.send(data);
  }

  store(req: Request, res: Response) {
    const { id, name } = req.body;
    data.push({ id, name });

    return res.send("Created Successfully!");
  }

  show(req: Request, res: Response) {
    const { id } = req.params;

    let person = data.find(item => item.id == id);

    return res.send(person);
  }

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find(item => item.id == id);
    person.name = name;

    return res.send("Updated Successfully!");
  }

  delete(req: Request, res: Response) {
    const { id } = req.params;

    let people = data.filter(item => item.id != id);

    return res.send(people);
  }
}

export default new UserController();