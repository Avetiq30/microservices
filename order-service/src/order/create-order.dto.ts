import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateOrderDto {
    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    bookId: number;

    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    quantity: number;
}
