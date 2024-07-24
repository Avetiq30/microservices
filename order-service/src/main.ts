import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {ConfigService} from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  const configService = app.get(ConfigService);


  const PORT = configService.get<number>('PORT');
  await app.listen(PORT, () => console.info('Server start on port' + PORT));
}
bootstrap();
