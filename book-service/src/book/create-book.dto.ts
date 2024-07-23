import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateBookDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly author: string;

    @IsOptional()
    @IsDateString()
    readonly publishedDate?: Date;

    @IsNumber()
    readonly price: number;
}
