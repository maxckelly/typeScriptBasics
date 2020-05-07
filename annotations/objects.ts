const profile = {
  name: 'Alex',
  age: 20,
  coordinates: {
    lat: 0,
    lng: 15
  },
  setAge(age: number, name: string): void {
    this.age = age;
    this.name = name;
  }
};

const { age, name }: { age: number, name: string } = profile;

// The below works like: the first part `{ coordinates: {lat, lng }}` is where you're destructing the object and getting the lat and lng in the nested obj.
// Then the next part `{coordinates: {lat: number; lng: number}}` is where you're annotating the types.
const { coordinates: { lat, lng } }: { coordinates: { lat: number; lng: number } } = profile;