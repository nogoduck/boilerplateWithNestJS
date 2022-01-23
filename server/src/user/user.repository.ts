import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './model/user.model';
import { Model } from 'mongoose';
import { UserRequestDto } from './dto/user.request.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private readonly user: Model<User>) {}

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.user.exists({ email });
    return result;
  }

  async createUser(userRequestDto: UserRequestDto): Promise<User> {
    return await this.user.create(userRequestDto);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.user.findOne({ email });
    return user;
  }
}
