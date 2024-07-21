import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {AppDataSource} from "./data-source";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      autoLoadEntities: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
