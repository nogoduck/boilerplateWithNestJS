import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  userDummy(): Object {
    return { name: 'ad', pw: 'dddsd' };
  }
}
