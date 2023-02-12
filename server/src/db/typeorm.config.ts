import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

import { User } from '../users/user.entity';
import { City } from '../cities/city.entity';
import { Price } from '../prices/price.entity';
import { Address } from '../addresses/address.entity';

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.get('PG_HOST'),
    port: configService.get('PG_PORT'),
    username: configService.get('PG_USER'),
    password: configService.get('PG_PASSWORD'),
    database: configService.get('PG_DATABASE'),
    entities: [User, City, Price, Address],
    synchronize: true,
    migrations: ['./src/db/migrations/*.ts']
});