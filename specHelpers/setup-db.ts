/* eslint-disable import/no-extraneous-dependencies */
import 'dotenv/config';
import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import ormConfig from './ormconfig';

require('ts-node/register');
require('tsconfig-paths/register');

export default async () => {
  const testOrmConfig: PostgresConnectionOptions = {
    ...(ormConfig as PostgresConnectionOptions),
  };

  const t0 = Date.now();
  const connection = await createConnection(testOrmConfig);
  const connectTime = Date.now();
  await connection.runMigrations();
  console.log(`Connected to DB in ${connectTime - t0}ms`);
};
