import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './Dto/create-order.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
    ) {}

    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        try {
            const newOrder = this.orderRepository.create(createOrderDto);
            return await this.orderRepository.save(newOrder);
        } catch (error) {
            throw new Error(`Error creating order: ${error.message}`);
        }
    }

    async getAllOrders(): Promise<Order[]> {
        try {
            return await this.orderRepository.find();
        } catch (error) {
            throw new Error(`Error retrieving orders: ${error.message}`);
        }
    }

}
