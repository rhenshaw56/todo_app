import { Response, Request } from 'express';
import { TaskService } from '../services/task.service';

export class TaskController {
  static getAll = async (req: Request, res: Response) => {
    try {
      const tasks = await TaskService.getAll(req);
      res.send(tasks);
    } catch (err: any) {
      TaskController.handleError(err, res);
    }
  };

  static create = async (req: Request, res: Response) => {
    try {
      const createdTask = await TaskService.create(req);
      res.send(createdTask);
    } catch (err: any) {
      TaskController.handleError(err, res);
    }
  };

  static update = async (req: Request, res: Response) => {
    try {
      const updatedTask = await TaskService.update(req);
      res.send(updatedTask);
    } catch (err: any) {
      TaskController.handleError(err, res);
    }
  };

  static delete = async (req: Request, res: Response) => {
    try {
      const deletedTask = await TaskService.delete(req);
      res.send(deletedTask);
    } catch (err: any) {
      TaskController.handleError(err, res);
    }
  };

  static handleError = (err: Error, res: Response) => {
    res.status(400).send({
      code: 400,
      message: `Bad Request - ${err}`,
    });
  };
}
