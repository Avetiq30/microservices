import {Controller, Get, Post, Body, HttpCode, HttpStatus, Param, HttpException} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './Dto/create-order.dto';
import { Order } from './order.entity';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        try {
            return await this.orderService.createOrder(createOrderDto);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async getAllOrders(): Promise<Order[]> {
        try {
            return await this.orderService.getAllOrders();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
