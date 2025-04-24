const express = require('express');
const { config } = require('dotenv');
require('reflect-metadata');
const { AppDataSource } = require('../build/config/database');
const callRoutes = require('../build/routes/callRoutes').default;

// Load environment variables
config();

// Initialize express
const app = express();
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Service is running' });
});

// Routes
app.use('/api', callRoutes);

// Initialize database connection when the serverless function starts
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    await AppDataSource.initialize();
    isConnected = true;
    console.log('Database connection established');
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
}

// Connect to the database before handling requests
app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Database connection error', error: error.message });
  }
});

// Export the Express app
module.exports = app; 