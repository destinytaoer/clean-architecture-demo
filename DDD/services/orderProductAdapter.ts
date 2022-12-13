import {User} from "../domain/user";
import {ProductList} from "../domain/product";
import {orderProducts} from '../application/orderProducts'
import {useNotifier} from "./notificationAdapter";
import {usePayment} from "./paymentAdapter";
import {useOrdersStorage} from "./storageAdapter";

export function useOrderProducts() {
    const notifier = useNotifier();
    const payment = usePayment();
    const orderStorage = useOrdersStorage();

    return (user: User, products: ProductList) =>
        orderProducts(user, products, {
            notifier,
            payment,
            orderStorage,
        });
}
