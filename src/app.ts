import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { taskRoutes } from './routes';

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(taskRoutes());
app.use('*', (_req: Request, res: Response) => {
  res.sendStatus(404);
});

export default app;
