import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User | null> {
        return this.usersRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    create(model: UserDto): Promise<User> {
        const user = new User();

        user.role = model.role;
        user.firstName = model.firstName;
        user.lastName = model.lastName;
        user.phoneNumber = model.phoneNumber;
        user.isActive = true;

        return this.usersRepository.save(user);
    }
}