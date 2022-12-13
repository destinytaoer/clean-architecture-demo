import { Order } from "../domain/order";

// application 与外部通信的端口
export interface PaymentService {
    tryPay(amount: PriceCents): Promise<boolean>;
}

export interface NotificationService {
    notify(message: string): void;
}

export interface OrderStorageService {
    orders: Order[];
    updateOrders(orders: Order[]): void;
}

export interface CartStorageService {
    emptyCart(): void;
}
