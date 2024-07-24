import {Controller, Get, Post, Body, HttpCode, HttpStatus, HttpException} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './Dto/create-book.dto';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
    constructor(
        private readonly bookService: BookService
    ) {}

    @Post()
    async addBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
        try {
            return await this.bookService.addBook(createBookDto);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async getAllBooks(): Promise<Book[]> {
        try {
            return await this.bookService.getAllBooks();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
