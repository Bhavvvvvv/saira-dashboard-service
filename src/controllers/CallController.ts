import { Request, Response } from 'express';
import { CallService } from '../services/CallService';

export class CallController {
    private callService: CallService;

    constructor() {
        this.callService = new CallService();
    }

    async createCall(req: Request, res: Response): Promise<void> {
        try {
            const call = await this.callService.createCall(req.body);
            res.status(201).json(call);
        } catch (error) {
            res.status(400).json({ message: 'Error creating call', error });
        }
    }

    async getCallById(req: Request, res: Response): Promise<void> {
        try {
            const call = await this.callService.getCallById(req.params.id);
            if (!call) {
                res.status(404).json({ message: 'Call not found' });
                return;
            }
            res.json(call);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving call', error });
        }
    }

    async getCallsByUserId(req: Request, res: Response): Promise<void> {
        try {
            const calls = await this.callService.getCallsByUserId(req.params.userId);
            res.json(calls);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving calls', error });
        }
    }

    async getAllCalls(req: Request, res: Response): Promise<void> {
        try {
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 10;
            const result = await this.callService.getAllCalls(page, limit);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving calls', error });
        }
    }

    async updateCall(req: Request, res: Response): Promise<void> {
        try {
            const call = await this.callService.updateCall(req.params.id, req.body);
            if (!call) {
                res.status(404).json({ message: 'Call not found' });
                return;
            }
            res.json(call);
        } catch (error) {
            res.status(500).json({ message: 'Error updating call', error });
        }
    }
} 