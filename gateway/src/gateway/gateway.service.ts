import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

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

@Injectable()
export class GatewayService {
    private readonly bookServiceUrl: string;
    private readonly orderServiceUrl: string;

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.bookServiceUrl = this.configService.get<string>('BOOK_SERVICE_URL');
        this.orderServiceUrl = this.configService.get<string>('ORDER_SERVICE_URL');
    }

    async addBook(createBookDto: CreateBookDto) {
        try {
            const response = await axios.post(`${this.bookServiceUrl}/books`, createBookDto);
            return response.data;
        } catch (error) {
            throw new Error(`Error adding book: ${error.message}`);
        }
    }

    async getAllBooks() {
        try {
            const response = await axios.get(`${this.bookServiceUrl}/books`);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting books: ${error.message}`);
        }
    }

    async createOrder(createOrderDto: CreateOrderDto) {
        try {
            const response = await axios.post(`${this.orderServiceUrl}/orders`, createOrderDto);
            return response.data;
        } catch (error) {
            throw new Error(`Error creating order: ${error.message}`);
        }
    }

    async getAllOrders() {
        try {
            const response = await axios.get(`${this.orderServiceUrl}/orders`);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting orders: ${error.message}`);
        }
    }
}
