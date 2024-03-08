import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const envVars = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8000,
    MONGODB_URL: process.env.MONGODB_URL
};

const {NODE_ENV, PORT, MONGODB_URL} = envVars;

export const config = {
    env: NODE_ENV,
    port: PORT,
    database_connection: MONGODB_URL
}