// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extending the Vehicle class
class Motorbike extends Vehicle {
  // Declaring properties of the Motorbike class
  // The properties include vin, color, make, model, year, weight, top speed, and wheels
  // The types are as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Creating a constructor that accepts the properties of the Motorbike class
    // The constructor calls the constructor of the parent class, Vehicle
    // The constructor initializse the properties of the Motorbike class
    // The constructor checks if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  constructor ( 
    vin: string, 
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (wheels.length !==2) {
      this.wheels = [new Wheel(), new Wheel()]
    }
    else {
      this.wheels = wheels;
    }
  }
  // Implementing the wheelie method
    // The method logs the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie(): void {
    if (this.started) {
      console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    else {
      console.log('Start the vehicle first');
    }
  }
  // Overriding the printDetails method from the Vehicle class
  // The method calling the printDetails method of the parent class
  // The method logging the details of the Motorbike
  // The details include the VIN, make, model, year, weight, top speed, color, and wheels
  override printDetails(): void {
    super.printDetails();

    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
