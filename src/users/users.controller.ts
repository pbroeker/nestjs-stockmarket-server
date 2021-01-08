import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async create(@Body() userData: CreateUserDto) {
    return this.userService.createOne(userData);
  }

  @Post()
  login(@Body() loginUserDto: LoginUserDto): string {
    return `Logging in user with ${loginUserDto.email} and ${loginUserDto.password}`;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.userService.findOne(id);
  }

  @Put()
  change(@Body() { firstName, lastName, email }: CreateUserDto): string {
    return `Userdata changed with: ${firstName}, ${lastName}, ${email}`;
  }

  @Delete(':id')
  deleteOne(@Param('id') id): string {
    return `User with id ${id} was deleted.`;
  }
}
