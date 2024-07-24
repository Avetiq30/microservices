import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
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
    OrderModule,
  ],
})
export class AppModule {}
