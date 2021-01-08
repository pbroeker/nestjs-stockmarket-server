import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/users.controller';
import { StocksController } from './stocks/stocks.controller';
import { ApiService } from './api/api.service';
import { LoginService } from './login/login.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';
import { Stock } from './stocks/stock.model';
import { UsersModule } from './users/users.module';
import { StocksModule } from './stocks/stocks.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, StocksModule, DatabaseModule],
  controllers: [AppController, UserController, StocksController],
  providers: [AppService, ApiService, LoginService],
})
export class AppModule {}
