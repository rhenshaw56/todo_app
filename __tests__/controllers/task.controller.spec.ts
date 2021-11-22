import { TaskController } from '../../src/controller/task.controller';
import { TaskService } from '../../src/services/task.service';
import { TaskEntity } from '../../src/entity/task.entity';

const res = {
  status: jest.fn(),
  send: jest.fn(),
} as any;

describe('TaskController', () => {
  beforeEach(() => {});
  test('It should create a task', async () => {
    const task: TaskEntity = {
      name: 'Do Stuff',
      status: 'in-progress',
    };
    const createService = jest.spyOn(TaskService, 'create').mockReturnValue(Promise.resolve({ ...task, id: 1 }));
    const req = {
      body: task,
    } as any;
    await TaskController.create(req, res);

    expect(createService).toHaveBeenCalledTimes(1);
    expect(createService).toHaveBeenCalledWith(req);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({ id: 1, name: 'Do Stuff', status: 'in-progress' });
  });
});
