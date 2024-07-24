import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import {AppDataSource} from "./data-source";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      autoLoadEntities: true,
    }),
    BookModule,
  ],
})
export class AppModule {}
