import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('order')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bookId: number;

    @Column({ type: 'int' })
    quantity: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
