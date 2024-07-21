import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './create-post.dto';
import { lastValueFrom } from 'rxjs';


@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        private readonly httpService: HttpService
    ) {}

    // async create(createPostDto: CreatePostDto): Promise<Post> {
    //     const post = new Post();
    //     post.title = createPostDto.title;
    //     post.content = createPostDto.content;
    //     console.log(post)
    //     return this.postRepository.save(post);
    // }

    async findAll(): Promise<Post[]> {
        return this.postRepository.find();
    }

    async sendPostDataToUserService(postData: any) {
        try {
            const response = await lastValueFrom(this.httpService.post('http://user-service:4000/users', postData));
            return response;
        } catch (error) {
            console.error('Error sending post data to user service:', error);
            throw error;
        }
    }


}