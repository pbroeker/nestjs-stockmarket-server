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

  async changeOne(
    id: number,
    userData: CreateUserDto,
  ): Promise<[number, User[]]> {
    return await this.userRepository.update(userData, {
      where: { user_id: id },
    });
  }

  async deleteOne(id: number): Promise<number> {
    return await this.userRepository.destroy({
      where: { user_id: id },
    });
  }
}
