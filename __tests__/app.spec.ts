import supertest from 'supertest';
import app from '../src/app';
import { TaskEntity } from '../src/entity/task.entity';

describe('app', () => {
  beforeEach(async () => {
    const repo = global.connection.getRepository(TaskEntity);
    const task1 = new TaskEntity();
    const task2 = new TaskEntity();
    task1.name = 'Do Foo';
    task2.name = 'Do Bar';
    task2.status = 'completed';

    await repo.save(task1);
    await repo.save(task2);
  });
  test('it should fetch all tasks', () => {
    app.set('connection', global.connection);
    const client = supertest.agent(app);
    client.get('/tasks').end((err: any, res: any) => {
      expect(res.body).toEqual([
        { id: 1, name: 'Do Foo', status: 'in-progress' },
        { id: 2, name: 'Do Bar', status: 'completed' },
      ]);
      global.connection.close();
    });
  });
});
