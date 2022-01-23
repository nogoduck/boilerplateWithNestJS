import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const MODE: boolean = process.env.NODE_ENV === 'development' ? true : false;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const PORT = process.env.PORT || 8000;
  const config = new DocumentBuilder()
    .setTitle('Boilerplate')
    .setDescription('The Boilerplate API description')
    .setVersion('1.0')
    .addTag('default')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  // origin은 배포시 특정 URL을 사용하길 권장함
  app.enableCors({
    origin: MODE || process.env.ORIGIN_URL,
    credentials: true,
  });

  await app.listen(PORT);
}

bootstrap();
