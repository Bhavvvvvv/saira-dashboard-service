import { DataSource } from 'typeorm';
import { Call } from '../entities/Call';
import { config } from 'dotenv';

config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    username: process.env.POSTGRES_USER || 'bhavnaharitsa',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_DB || 'sales_calls_db',
    synchronize: true, // Be careful with this in production
    logging: true,
    entities: [Call],
    subscribers: [],
    migrations: [],
}); 