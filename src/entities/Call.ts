import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('calls')
export class Call {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'user_id', nullable: false })
    userId: string;

    @Column({ name: 'phone_number', nullable: false })
    phoneNumber: string;

    @Column({ name: 'application_id', nullable: false })
    applicationId: string;

    @Column({ type: 'timestamp', name: 'call_time', nullable: false })
    callTime: Date;

    @Column({ nullable: false })
    language: string;

    @Column({ type: 'int', nullable: false })
    duration: number;

    @Column({ name: 'recording_link', nullable: true })
    recordingLink: string;

    @Column({ type: 'text', nullable: true })
    summary: string;

    @Column({ name: 'step_id', nullable: true })
    stepId: string;

    @Column({ nullable: false, default: 'pending' })
    disposition: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
} 