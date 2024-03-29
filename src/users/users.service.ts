import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = User.create(createUserDto);
    await user.save();

    delete user.password;
    return user;
  }

  async findAll(): Promise<User[]> {
    return User.find({
      select: ['id', 'name', 'email', 'createdAt', 'updatedAt'],
    });
  }

  async findOne(id: number): Promise<User> {
    const user = await User.findOne(id);

    delete user.password;
    return user;
  }

  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }

  async findByName(name: string) {
    return await User.findOne({
      where: {
        name: name,
      },
    });
  }
}
