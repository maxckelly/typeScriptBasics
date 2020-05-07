// Below is how you assign a type to the arguments.
// The 'number' word at the end is what the function will return => If you remove the return you will see that it displays an error. 
const add = (a: number, b: number): number => {
  return a + b;
};

add(5, 6)

// With type inference the above can be done automatically. Like the below:
// As you can see we left off the last 'number'. But TS still guesses what type will be returned.

const anotherAdd = (a: number, b: number) => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function (a: number, b: number): number {
  return a * b;
};

const text = (text: string): string => {
  return text
};

const logger = (message: string): void => {
  console.log(message);
};

// 'Never' means that we will never reach the end of the function. Because you can't really return an error you put never at the end. 
// If you put a return at the end of this function it will be an error. 
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

// Void is at the end of the function because we aren't returning anything.
const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast)

// Object destructor with annotation types
const todaysWeather = ({ date, weather }: { date: Date, weather: string }): void => {

}
