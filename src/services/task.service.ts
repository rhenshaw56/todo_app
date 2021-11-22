import { Request } from 'express';
import { Connection, Repository } from 'typeorm';
import { TaskEntity } from '../entity/task.entity';

export class TaskService {
  static getRepository = (req: Request): Repository<TaskEntity> => {
    const connection: Connection = req.app.get('connection');
    const taskRepository = connection.getRepository(TaskEntity);
    return taskRepository;
  };

  static getAll = async (req: Request) => {
    const taskRepository = TaskService.getRepository(req);
    const query = {
      ...(req.query.status && {
        where: {
          status: req.query.status,
        },
      }),
    };
    const tasks = await taskRepository.find(query);
    return tasks;
  };

  static create = async (req: Request): Promise<TaskEntity> => {
    const taskRepository = TaskService.getRepository(req);
    const task: TaskEntity = {
      name: req.body.name,
      status: req.body.status || 'in-progress',
    };

    try {
      const newTask = taskRepository.create(task);
      await taskRepository.save(newTask);
      return newTask;
    } catch (err) {
      throw Error(`Unable to create task - pleas ensure content-type is specified as 'application/json'`);
    }
  };

  static update = async (req: Request) => {
    const taskRepository = TaskService.getRepository(req);
    const id = Number(req.params.id);
    const task: TaskEntity = {
      ...(req.body.name && {
        name: req.body.name,
      }),
      ...(req.body.status && {
        status: req.body.status,
      }),
    };
    try {
      const updatedTask = await taskRepository.update(id, task);
      return updatedTask;
    } catch (err) {
      throw Error(`Unable to update task - Status should either be 'in-progress' or 'completed'`);
    }
  };

  static delete = async (req: Request) => {
    const taskRepository = TaskService.getRepository(req);
    const deletedTask = await taskRepository.delete(Number(req.params.id));
    return deletedTask;
  };
}
