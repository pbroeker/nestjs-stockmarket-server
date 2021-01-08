import { Injectable, Inject } from '@nestjs/common';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
  ) {}

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        user_id: id,
      },
    });
  }

  async createOne(userData: CreateUserDto): Promise<User> {
    return await this.userRepository.create(userData);
  }
}
