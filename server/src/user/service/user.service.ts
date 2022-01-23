import { Injectable } from '@nestjs/common';
import { UserRequestDto } from '../dto/user.request.dto';

@Injectable()
export class UserService {
  async signUp(userRequestDto: UserRequestDto) {
    return userRequestDto;
  }

  async signIn() {
    return 'signIn';
  }

  async signOut() {
    return 'signOut: The client processes it';
  }
}
