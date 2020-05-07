// Type annotations is when we tell typescript the type.
// Type inference is when typescript guesses the type.

// The below is declaring that the variable will be a number and no other type.
// If you try to assign it a different type of value it will display an error. 
let apples: number = 5;
let speed: string = 'fast';
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

// -- Object Annotation --
// The below is how you assign the types in an object.
let point: { x: number, y: string } = {
  x: 10,
  y: 'Hello there'
};

//-- Function annotation --
// The `(num: number) => void` is the annotation. This is saying what the function is expecting and the void means the result.
// So if you're expecting a string instead of void it will be a string. 
const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
};

// 1) Function that returns the 'any' type.
// When there is an 'any' type TS can't show us the error. For example this would return any `const coordinates = JSON.parse(json);`
// To fix the any you can do the below. 
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line and initialize it later.
let words = ['red', 'green', 'blue'];
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  };
};

// 3) Variable whose type cannot be inferred correctly
// The below is an example when you might have two different types. This is saying to expect the type to be either a boolean or a number.  
let numbersArray = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] > 0) {
    numberAboveZero = numbers[i];
  };
};


// Type inference
// This is when typescript automatically guesses the type
// e.g. you don't need to put :string, :number etc..
let fruit = 'apple';
let one = 1;

