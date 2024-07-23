import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Order} from "./order.entity";
import { HttpModule } from '@nestjs/axios';


@Module({
  imports:[
    TypeOrmModule.forFeature([Order]),
    HttpModule
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports:[OrderService,TypeOrmModule]
})
export class OrderModule {}
