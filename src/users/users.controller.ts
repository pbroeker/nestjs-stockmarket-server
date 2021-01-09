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
  create(@Body() userData: CreateUserDto) {
    return this.userService.createOne(userData);
  }

  @Post()
  login(@Body() loginUserDto: LoginUserDto): string {
    return `Logging in user with ${loginUserDto.email} and ${loginUserDto.password}`;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  change(@Param('id') id: number, @Body() userData: CreateUserDto) {
    return this.userService.changeOne(id, userData);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.userService.deleteOne(id);
  }
}
