import 'dotenv/config';
import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import app from './app';
import * as config from './ormconfig';

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

createConnection(config)
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    process.exit(1);
  })
  .then((connection: Connection) => {
    app.set('connection', connection);
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server up @ port ${PORT}`);
    });
  });
