import { getConnection } from 'typeorm';
// import supertest from 'supertest';
// import { createServer, Server as HttpServer } from 'http';

import { createDatabaseConnection } from './con';
// import app from '../src/app';

beforeEach(async () => {
  global.connection = await createDatabaseConnection();
  // app.set('connection', global.connection);
});
