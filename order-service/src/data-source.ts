import { DataSource } from 'typeorm';
import {Order} from "./order/order.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'order-db',
    port: 5432,
    username: 'order',
    password: 'password',
    database: 'order_db',
    entities: [Order],
    synchronize: true,
});
