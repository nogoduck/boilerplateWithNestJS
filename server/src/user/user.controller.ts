import {
  Controller,
  Get,
  HttpException,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { HttpExceptionFilter } from '../common/exception/http-exception.filter';
import { SuccessInterceptor } from '../common/interceptor/success.interceptor';

@Controller('user')
@UseInterceptors(new SuccessInterceptor())
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  userTestRouter(): Object | string {
    return this.userService.userDummy();
  }
}
