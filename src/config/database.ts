import { DataSource } from 'typeorm';
import { Call } from '../entities/Call';
import { config } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

config();

const certPath = path.resolve(__dirname, '../../rds-ca-cert.pem');

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'database-1.cy7pfbxr3mpl.ap-south-1.rds.amazonaws.com',
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    username: process.env.POSTGRES_USER || 'sairadb',
    password: process.env.POSTGRES_PASSWORD || 'saira123',
    database: process.env.POSTGRES_DB || 'postgres',
    synchronize: true, // Be careful with this in production
    logging: true,
    entities: [Call],
    subscribers: [],
    migrations: [],
    ssl: {
        ca: fs.readFileSync(certPath).toString(),
        rejectUnauthorized: true
    }
}); 