import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { City } from '../cities/city.entity';

@Entity()
export class Price {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @JoinColumn()
    @OneToOne(() => City)
    cityFrom: City;

    @JoinColumn()
    @OneToOne(() => City)
    cityTo: City;

    @Column({ type: 'int' })
    value: number;
}