import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
    ) {}

    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        const newOrder = this.orderRepository.create(createOrderDto);
        return this.orderRepository.save(newOrder);
    }

    async getAllOrders(): Promise<Order[]> {
        return this.orderRepository.find();
    }

}
