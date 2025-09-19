import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Retangle } from "./Retangle";

// My shape is abstract
// let myShape = new Shape(10, 5);
// console.log(myShape.getInfo())

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRetangle = new Retangle(1,2,3,4);
console.log(myRetangle.getInfo());

console.log("------------------------------");

let theShapes: Shape[] = [];

//theShapes.push(myShape);
theShapes.push(myRetangle);
theShapes.push(myCircle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
}
