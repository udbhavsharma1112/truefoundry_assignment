import { config } from 'dotenv';
config();

export const clickhouseConfig = {
    host: process.env.DATABASE_URL,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dataObjects: true, 
  };