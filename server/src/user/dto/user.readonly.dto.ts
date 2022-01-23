import { ApiProperty, PickType } from '@nestjs/swagger';
import { UserModel } from '../model/user.model';

export class UserReadonlyDto extends PickType(UserModel, ['name', 'email']) {
  @ApiProperty({
    example: '61e38293318e650dca5e6ed5358',
    description: '_id',
  })
  _id: string;
}
