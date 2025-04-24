import { Router } from 'express';
import { CallController } from '../controllers/CallController';

const router = Router();
const callController = new CallController();

// Create a new call
router.put('/calls', (req, res) => callController.createCall(req, res));

// Get call by ID
router.get('/calls/:id', (req, res) => callController.getCallById(req, res));

// Get calls by user ID
router.get('/calls/user/:userId', (req, res) => callController.getCallsByUserId(req, res));

// Get all calls with pagination
router.get('/calls', (req, res) => callController.getAllCalls(req, res));

// Update a call
router.put('/calls/:id', (req, res) => callController.updateCall(req, res));

export default router; 