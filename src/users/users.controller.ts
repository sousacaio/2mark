import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      const hasEmail = await this.usersService.findByEmail(createUserDto.email);

      if (hasEmail)
        throw new HttpException('Email already in use', HttpStatus.CONFLICT);

      const hasExistentName = await this.usersService.findByName(
        createUserDto.name,
      );

      if (hasExistentName)
        throw new HttpException('Name already in use', HttpStatus.CONFLICT);

      return this.usersService.create(createUserDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    try {
      return this.usersService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.usersService.findOne(id);
  }
}
