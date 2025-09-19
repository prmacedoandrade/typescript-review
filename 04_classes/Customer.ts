class Customer{
    
    constructor(private _firstName: string, private _lastName: string){
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string){
        this._lastName = value;
    }

}

let myCustomer = new Customer('First', 'Last');
myCustomer.firstName = 'Test1';
myCustomer.lastName = 'Test2';

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
