export class Product{

    private _id: number;
    private _name: string;
    private _description: string;
    public _price: number;

    constructor() {

    }
    
    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }


    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }


    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }

    get price(): number {
        return this._price;
    }
    set price(value: number) {
        this._price = value;
    }

}
