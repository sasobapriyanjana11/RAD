import {useContext} from "react";
import {OrderDetailsContext} from "../component/OrderDetailsProvider.tsx";

export const ViewOrderDetails = () => {
    const [orderDetails] = useContext(OrderDetailsContext);

    return (
        <>
            <h1>Order Details</h1>
            <table>
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Item Code</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                </tr>
                </thead>
                <tbody>
                {orderDetails.map((detail, index) => (
                    <tr key={index}>
                        <td>{detail.orderId}</td>
                        <td>{detail.itemCode}</td>
                        <td>{detail.quantity}</td>
                        <td>{detail.unitPrice}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};
