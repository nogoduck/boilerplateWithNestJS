import { ApiProperty, PickType } from '@nestjs/swagger';
import { UserModel } from '../model/user.model';

export class UserRequestDto extends PickType(UserModel, [
  'name',
  'email',
  'password',
]) {}
