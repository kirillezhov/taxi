import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './request.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Request])],
})
export class RequestsModule {}