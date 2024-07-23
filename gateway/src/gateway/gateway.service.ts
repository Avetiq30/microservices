import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
    private readonly bookServiceUrl: string;
    private readonly orderServiceUrl: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.bookServiceUrl = this.configService.get<string>('BOOK_SERVICE_URL');
        this.orderServiceUrl = this.configService.get<string>('ORDER_SERVICE_URL');
    }

    async addBook(book: any) {
        const response = this.httpService.post(`${this.bookServiceUrl}/books`, book);
        return lastValueFrom(response);
    }

    async getAllBooks() {
        const response = this.httpService.get(`${this.bookServiceUrl}/books`);
        return lastValueFrom(response);
    }

    async createOrder(order: any) {
        const response = this.httpService.post(`${this.orderServiceUrl}/orders`, order);
        return lastValueFrom(response);
    }

    async getAllOrders() {
        const response = this.httpService.get(`${this.orderServiceUrl}/orders`);
        return lastValueFrom(response);
    }
}
