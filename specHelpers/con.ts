import { createConnection } from 'typeorm';
import * as testConfig from './ormconfig';

export async function createDatabaseConnection() {
  const conn = await createConnection(testConfig);
  return conn;
}
