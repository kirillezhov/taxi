import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column( { type: 'text' })
    phoneNumber: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'timestamptz' })
    createdAt: Date;
}