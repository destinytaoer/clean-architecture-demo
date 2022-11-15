import {User} from '../domain/user';
import { createOrder } from '../domain/order';
import {NotificationService, OrderStorageService, PaymentService} from './ports';
import {ProductList} from "../domain/product";

type OrderProducts = (user: User, productList: ProductList, dependencies: Dependencies) => Promise<void>;

type Dependencies = {
    notifier: NotificationService;
    payment: PaymentService;
    orderStorage: OrderStorageService;
};

export async function orderProducts(user: User, productList: ProductList, dependencies: Dependencies) {
    const {notifier, payment, orderStorage} = dependencies
    const order = createOrder(user, productList);

    // Try to pay for the order;
    // Notify the user if something is wrong:
    const paid = await payment.tryPay(order.total);
    if (!paid) return notifier.notify("Oops! 🤷");

    // Save the result and clear the cart:
    const {orders} = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    // cartStorage.emptyCart();
}

