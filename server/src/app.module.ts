import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/controller/user.controller';
import { UserService } from './user/service/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import * as mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_MONGO_ID}:${process.env.DB_MONGO_PASSWORD}@table0.zotlh.mongodb.net/${process.env.DB_MONGO_NAME}?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule implements NestModule {
  private readonly MODE: boolean =
    process.env.NODE_ENV === 'development' ? true : false;

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    // 개발시 몽구스 쿼리 확인
    mongoose.set('debug', this.MODE);
  }
}
