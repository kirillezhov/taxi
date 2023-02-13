import {Body, Controller, Get, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Controller('Users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get('GetAll')
    getAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('Create')
    async create(@Body() user: UserDto): Promise<User> {
        return await this.userService.create(user);
    }
}