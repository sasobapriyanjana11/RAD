export class OrderDetails {
    orderId: string;
    itemCode: string;
    quantity: number;
    unitPrice: number;

    constructor(orderId: string, itemCode: string, quantity: number, unitPrice: number) {
        this.orderId = orderId;
        this.itemCode = itemCode;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }
}
