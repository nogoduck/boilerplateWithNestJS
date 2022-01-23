import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { HttpExceptionFilter } from '../../common/exception/http-exception.filter';
import { SuccessInterceptor } from '../../common/interceptor/success.interceptor';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserReadonlyDto } from '../dto/user.readonly.dto';
import { UserRequestDto } from '../dto/user.request.dto';

@Controller('user')
@UseInterceptors(new SuccessInterceptor())
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '회원가입' })
  @ApiResponse({ status: 200, description: '성공', type: UserReadonlyDto })
  @ApiResponse({ status: 500, description: '서버 에러' })
  @Post('signup')
  signUp(@Body() userRequestDto: UserRequestDto) {
    return this.userService.signUp(userRequestDto);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('signin')
  signIn() {
    return this.userService.signIn();
  }

  @ApiOperation({ summary: '로그아웃' })
  @Get('signout')
  signOut() {
    return this.userService.signOut();
  }
}
