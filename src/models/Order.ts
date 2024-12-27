export class Order {
    id: string;
    customerId: string;
    total: number;
    orderDate: string;

    constructor(id: string, customerId: string, total: number, orderDate: string) {
        this.id = id;
        this.customerId = customerId;
        this.total = total;
        this.orderDate = orderDate;
    }
}
