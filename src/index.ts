import 'dotenv/config';
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import app from './server';
import * as config from './ormconfig';

dotenv.config();

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
  .then((connection) => {
    connection.runMigrations().then(() => {
      app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server up @ port ${PORT}`);
      });
    });
  });
