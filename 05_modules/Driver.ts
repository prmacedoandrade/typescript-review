import { Customer } from "./Customer";

let myCustomer = new Customer('First', 'Last');
myCustomer.firstName = 'Test1';
myCustomer.lastName = 'Test2';

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
