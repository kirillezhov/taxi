import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne} from 'typeorm';
import {City} from '../cities/city.entity';

@Entity()
export class Address {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @JoinColumn()
    @OneToOne(() => City)
    city: City;

    @Column()
    street: string;

    @Column()
    plate: string;
}