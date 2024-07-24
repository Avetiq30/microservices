import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './Dto/create-book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) {}

    async addBook(createBookDto: CreateBookDto): Promise<Book> {
        try {
            const newBook = this.bookRepository.create(createBookDto);
            return await this.bookRepository.save(newBook);
        } catch (error) {
            throw new Error(`Error adding book: ${error.message}`);
        }
    }

    async getAllBooks(): Promise<Book[]> {
        try {
            return await this.bookRepository.find();
        } catch (error) {
            throw new Error(`Error retrieving books: ${error.message}`);
        }
    }
}
