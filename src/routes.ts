import express from 'express';
import { TaskController } from './controller/task.controller';

export const taskRoutes = () => {
  const router = express.Router();
  router.post('/task/create', TaskController.create);
  router.get('/tasks', TaskController.getAll);
  router.put('/task/:id', TaskController.update);
  router.delete('/task/:id', TaskController.delete);

  return router;
};
