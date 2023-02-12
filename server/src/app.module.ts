import { Module } from '@nestjs/common';

import { AddressesModule } from './addresses/addresses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './cities/cities.module';
import { DatabaseModule } from './db/database.module';
import { PriceModule } from './prices/price.module';
import { RequestsModule } from './requests/requests.module';
import { UsersModule } from './users/users.module';

@Module({

  imports: [
    DatabaseModule,
    UsersModule,
    CityModule,
    PriceModule,
    AddressesModule,
    RequestsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
