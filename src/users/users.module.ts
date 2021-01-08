import { Module } from '@nestjs/common';

import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';

@Module({
  providers: [UsersService, ...usersProviders],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}
