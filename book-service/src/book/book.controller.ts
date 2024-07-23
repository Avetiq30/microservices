import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './create-book.dto';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
    constructor(
        private readonly bookService: BookService
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async addBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.bookService.addBook(createBookDto);
    }

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.getAllBooks();
    }
}
