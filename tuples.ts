// Tuple - array like structure where each element represents some property of a record. Mix and match different types.
// You have a fixed order for the elements. 
// Example below:
// This shows that the 'tuple' will always have the order of string, boolean and number. 
const pepsi: [string, boolean, number] = ['brown', true, 40];

// If you try and assign a value like the below it needs to match the type.
pepsi[0] = 40;

// The below is a cleaner way to write out the types 
type Drink = [string, boolean, number]
const cocaCola: Drink = ['brown', false, 100]
