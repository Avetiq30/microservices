import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Post} from "./post.entity";
import { HttpModule } from '@nestjs/axios';


@Module({
  imports:[
    TypeOrmModule.forFeature([Post]),
    HttpModule
  ],
  controllers: [PostController],
  providers: [PostService],
  exports:[PostService,TypeOrmModule]
})
export class PostModule {}
