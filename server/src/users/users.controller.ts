import {Body, Controller, Get, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Controller()
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() user: UserDto): Promise<User> {
        return this.userService.create(user);
    }
}