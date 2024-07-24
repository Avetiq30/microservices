import { DataSource } from 'typeorm';
import { Order } from './order/order.entity';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: parseInt(configService.get('DATABASE_PORT'), 10),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    entities: [Order],
    synchronize: true,
});
