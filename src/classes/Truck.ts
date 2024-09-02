// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  // The properties include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // The types are as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Create a constructor that accepts the properties of the Truck class
    // The constructor calls the constructor of the parent class, Vehicle
    // The constructor initializes the properties of the Truck class
    // The constructor checks if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
  constructor (
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    if (wheels.length !==4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()]
    }
    else {
      this.wheels = wheels;
    }
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make an model of the vehicle if it exists
    if (vehicle) {
      const vehicleMake = vehicle.make;
      const vehicleModel = vehicle.model;
    // Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // If it is, log that the vehicle is being towed
    // If it is not, log that the vehicle is too heavy to be towed
    if (this.started) {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${vehicleMake} ${vehicleModel} is being towed`);
    }
    else {
      console.log(`The ${vehicleMake} ${vehicleModel} is too heavy to be towed`);
    }
    } 
    else {
      console.log('Start the truck first');
    }
  }}
  // Override the printDetails method from the Vehicle class
    // The method calls the printDetails method of the parent class
    // The method logs the details of the Truck
    // The details include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    override printDetails(): void {
      super.printDetails;
      console.log(`VIN: ${this.vin}`);
      console.log(`Color: ${this.color}`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight} lbs`);
      console.log(`Top Speed: ${this.topSpeed} mph`);
      console.log(`Towing Capacity: ${this.towingCapacity} mph`);
      // Print details of the wheels
      console.log(
        `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
      );
      console.log(
        `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
      );
      console.log(
        `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
      );
      console.log(
        `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
      );
    }
}

// Export the Truck class as the default export
export default Truck;
