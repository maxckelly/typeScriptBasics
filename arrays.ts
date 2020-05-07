// Type inference is being used below. 
const carMakers = ['ford', 'Audi', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [
  ['f150'],
  ['Corolla'],
  ['Camaro']
];

// Type annotation would be like: 
const food: string[] = ['apple', 'Nanna'];
const importantDatesAnnotation: (Date | string)[] = [new Date(), '2030-10-10'];

// Help with inference when extracting values:
const carArray = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values:
// The below is underlined red because we're trying to push a number into a collection of strings.
carMakers.push(100);

// Help with 'map':
carMakers.map((car: string): string => {
  return car.toLowerCase()
});

// Flexible types:
const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2012');
importantDates.push(new Date());
