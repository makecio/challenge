import { Order } from "./order";
import { Product } from "./product";

export class OrderItem{

    public id: number;
    public product: Product;
    public priceItem: number;
    public order: Order;
    
    constructor() {

    } 

}
