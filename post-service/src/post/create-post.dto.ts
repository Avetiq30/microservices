import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @Length(5, 100)
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}
