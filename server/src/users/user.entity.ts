import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import Roles from './roles';

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
        enum: Roles,
        default: Roles.USER,
        nullable: false
    })
    role: Roles;
}