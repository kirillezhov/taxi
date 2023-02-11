import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Price } from './price.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Price])],
})
export class PriceModule {}