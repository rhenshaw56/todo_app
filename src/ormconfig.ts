import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/entity/**/*.[tj]s`],
  migrations: [`${__dirname}/migration/**/*.[tj]s`],
  subscribers: [`${__dirname}/subscriber/**/*.[tj]s`],
  cli: {
    entitiesDir: `${__dirname}/entity`,
    migrationsDir: `${__dirname}/migration`,
    subscribersDir: `${__dirname}/subscriber`,
  },
};

export = config;
