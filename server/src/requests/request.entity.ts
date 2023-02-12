import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    CreateDateColumn
} from 'typeorm';

import Status from './status';
import { Address } from '../addresses/address.entity';
import { User } from '../users/user.entity';

@Entity()
export class Request {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @JoinColumn()
    @OneToOne(() => Address, { nullable: false })
    addressFrom: Address;

    @JoinColumn()
    @OneToOne(() => Address, { nullable: false })
    addressTo: Address;

    @JoinColumn()
    @OneToOne(() => User, { nullable: false })
    owner: User;

    @JoinColumn()
    @OneToOne(() => User)
    driver: User;

    @Column({
        type: 'int',
        enum: Status,
        default: Status.NEW,
        nullable: false
    })
    status: Status;

    @JoinColumn()
    @OneToOne(() => User, { nullable: false })
    createdBy: User;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;
}