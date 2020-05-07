
// Interfaces are a good way to avoid repeating code. For example instead of writing out each type in a function you can just type Vehicle. Like the below: 
// To create an interface you have to always type `interface`.
// if you change 'broken' in oldCivic object it won't be considered a vehicle.
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
};

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

const printDrink = (drink: Reportable): void => {
  console.log(drink.summary());
};

printDrink(drink);
printVehicle(oldCivic);