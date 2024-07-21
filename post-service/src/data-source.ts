import { DataSource } from 'typeorm';
import {Post} from "./post/post.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'post-db',
    port: 5432,
    username: 'post',
    password: 'password',
    database: 'post_db',
    entities: [Post],
    synchronize: true,
});
