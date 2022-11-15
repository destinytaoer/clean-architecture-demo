import {FC, createContext, useContext, useState} from "react";

const StoreContext = createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: FC = ({children}) => {
    // ...Other entities...
    const [orders, setOrders] = useState([]);

    const value = {
        // ...
        orders,
        updateOrders: setOrders,
    };

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};
