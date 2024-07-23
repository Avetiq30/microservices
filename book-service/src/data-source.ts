import { DataSource } from 'typeorm';
import {Book} from "./book/book.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'book-db',
    port: 5432,
    username: 'book',
    password: 'password',
    database: 'book_db',
    entities: [Book],
    synchronize: true,
});
