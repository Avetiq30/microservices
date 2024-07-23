import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import {HttpModule} from "@nestjs/axios";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [HttpModule,ConfigModule,],
    controllers: [GatewayController],
    providers: [GatewayService],
})
export class GatewayModule {}
