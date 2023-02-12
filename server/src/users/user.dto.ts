import UserRole from './user.role';

export class UserDto {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    role: UserRole;
}