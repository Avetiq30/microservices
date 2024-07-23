import { Controller, Get, Post, Body } from '@nestjs/common';
import { GatewayService } from './gateway.service';

@Controller('gateway')
export class GatewayController {
    constructor(private readonly gatewayService: GatewayService) {}

    @Post('books')
    async addBook(@Body() book: any) {
        return this.gatewayService.addBook(book);
    }

    @Get('books')
    async getAllBooks() {
        return this.gatewayService.getAllBooks();
    }

    @Post('orders')
    async createOrder(@Body() order: any) {
        return this.gatewayService.createOrder(order);
    }

    @Get('orders')
    async getAllOrders() {
        return this.gatewayService.getAllOrders();
    }
}
