import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './create-post.dto';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    // @Post()
    // async create(@Body() createPostDto: CreatePostDto) {
    //     return this.postService.create(createPostDto);
    // }

    @Get()
    async findAll() {
        return this.postService.findAll();
    }

    @Post()
    async sendPostData(@Body() postData: any) {
        console.log('Post data:', postData); // Проверьте данные здесь
        const response = await this.postService.sendPostDataToUserService(postData);
        return response.data;
    }

}