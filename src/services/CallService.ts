import { Repository } from 'typeorm';
import { Call } from '../entities/Call';
import { AppDataSource } from '../config/database';

export class CallService {
    private callRepository: Repository<Call>;

    constructor() {
        this.callRepository = AppDataSource.getRepository(Call);
    }

    async createCall(callData: Partial<Call>): Promise<Call> {
        const call = this.callRepository.create(callData);
        return await this.callRepository.save(call);
    }

    async getCallById(id: string): Promise<Call | null> {
        return await this.callRepository.findOneBy({ id });
    }

    async getCallsByUserId(userId: string): Promise<Call[]> {
        return await this.callRepository.find({
            where: { userId },
            order: { callTime: 'DESC' }
        });
    }

    async getAllCalls(page: number = 1, limit: number = 10): Promise<{ calls: Call[], total: number }> {
        const [calls, total] = await this.callRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: { callTime: 'DESC' }
        });

        return { calls, total };
    }

    async updateCall(id: string, callData: Partial<Call>): Promise<Call | null> {
        await this.callRepository.update(id, callData);
        return await this.getCallById(id);
    }
} 