import {useState, useContext} from "react";
import {Order} from "../models/Order.ts";
import {OrderContext} from "../component/OrderProvider.tsx";

export function AddOrder() {
    const [id, setId] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [total, setTotal] = useState<number>(0);
    const [orderDate, setOrderDate] = useState("");

    const [orders, setOrders] = useContext(OrderContext);

    function handleSubmit() {
        const newOrder: Order = new Order(id, customerId, total, orderDate);
        setOrders((prevOrders: Order[]) => [...prevOrders, newOrder]);
    }

    return (
        <>
            <h1>Add Order</h1>
            <input type="text" placeholder="Order ID" onChange={(e) => setId(e.target.value)} />
            <input type="text" placeholder="Customer ID" onChange={(e) => setCustomerId(e.target.value)} />
            <input type="number" placeholder="Total" onChange={(e) => setTotal(Number(e.target.value))} />
            <input type="date" placeholder="Order Date" onChange={(e) => setOrderDate(e.target.value)} />
            <button onClick={handleSubmit}>Add Order</button>
        </>
    );
}
