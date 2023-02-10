import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    name: string;

    @Column({ default: true })
    isActive: boolean;
}