import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

import UserRole from './user.role';

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column( { type: 'text' })
    phoneNumber: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @Column({
        type: 'int',
        enum: UserRole,
        default: UserRole.USER,
        nullable: false
    })
    role: UserRole;
}