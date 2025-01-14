
export class Customer{

    private _id: number;
    private _name: string;
    private _surname: string;
    private _document: string;

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


    get surname(): string {
        return this._surname;
    }
    set surname(value: string) {
        this._surname = value;
    }

    get document(): string {
        return this._document;
    }
    set document(value: string) {
        this._document = value;
    }
}
