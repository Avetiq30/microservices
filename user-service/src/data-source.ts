import { DataSource } from 'typeorm';
import {User} from "./user/user.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'user-db',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'user_db',
    entities: [User],
    synchronize: true,
});
