import { Customer } from "./customer";
import { OrderItem } from "./order-item";

export class Order{

    private _id: number;
    private _customer: Customer;
    private _itens: OrderItem[] = [];
    private _total: number;
    private _dateCreated: Date;
    private _dateUpdated: Date;
    private _status: any;

    constructor() {

        
    } 

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }


    get customer(): Customer {
        return this._customer;
    }
    set customer(value: Customer) {
        this._customer = value;
    }


    get itens(): OrderItem[] {
        return this._itens;
    }
    set itens(value: OrderItem[]) {
        this._itens = value;
    }

    get total(): number {
        return this._total;
    }
    set total(value: number) {
        this._total = value;
    }

    get dateCreated(): Date {
        return this._dateCreated;
    }
    set dateCreated(value: Date) {
        this._dateCreated = value;
    }

    get dateUpdated(): Date {
        return this._dateUpdated;
    }
    set dateUpdated(value: Date) {
        this._dateUpdated = value;
    }

    get status(): any {
        return this._status;
    }
    set status(value: any) {
        this._status = value;
    }
}
