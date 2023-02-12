import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './db/database.module';
import { CityModule } from './cities/cities.module';
import { PriceModule } from './prices/price.module';
import {AddressesModule} from './addresses/addresses.module';

@Module({

  imports: [
    DatabaseModule,
    UsersModule,
    CityModule,
    PriceModule,
    AddressesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
