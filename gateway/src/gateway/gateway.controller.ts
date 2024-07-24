import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GatewayService } from './gateway.service';

interface CreateBookDto {
    title: string;
    author: string;
    publishedDate: string;
    price: number;
}

interface CreateOrderDto {
    bookId: number;
    quantity: number;
}

@Controller('gateway')
export class GatewayController {
    constructor(private readonly gatewayService: GatewayService) {}

    @Post('books')
    async addBook(@Body() createBookDto: CreateBookDto) {
        try {
            return await this.gatewayService.addBook(createBookDto);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('books')
    async getAllBooks() {
        try {
            return await this.gatewayService.getAllBooks();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('orders')
    async createOrder(@Body() createOrderDto: CreateOrderDto) {
        try {
            return await this.gatewayService.createOrder(createOrderDto);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('orders')
    async getAllOrders() {
        try {
            return await this.gatewayService.getAllOrders();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
