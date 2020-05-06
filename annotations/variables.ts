// The below is declaring that the variable will be a number and no other type.
// If you try to assign it a different type of value it will display an error. 
let apples: number = 5;
let speed: string = 'fast'
const hasName: boolean = true;
const nothingMuch: null = null;
const nothing: undefined = undefined;
const now: Date = new Date();

// -- Array annotations --
// The below says this array will contain nothing but strings
// The 'string[]' says this is an array.
let colors: string[] = ['red', 'blue', 'yellow'];

// You can do it with other types as well: 
let numbers: number[] = [1, 2, 3];

// As well as booleans:
let truths: boolean[] = [true, true, false];

// -- Class Annotations --
class Car {

};

// The below is saying the variable car is only ever going to be an instance of the car. 
let car: Car = new Car();

// -- Object literal --
// The below is how you assign the types in an object.
let point: { x: number, y: string } = {
  x: 10,
  y: 'Hello there'
};

