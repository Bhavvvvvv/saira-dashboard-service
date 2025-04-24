import express from 'express';
import 'reflect-metadata';
import { config } from 'dotenv';
import { AppDataSource } from './config/database';
import callRoutes from './routes/callRoutes';

// Load environment variables
config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Service is running' });
});

// Routes
app.use('/api', callRoutes);

// Initialize database connection
AppDataSource.initialize()
    .then(() => {
        console.log('Database connection established');
        
        // Start server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }); 