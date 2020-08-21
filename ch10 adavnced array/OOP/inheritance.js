// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"
Vehicle.prototype.start = function () {
    console.log('VROOM!')
}

// 3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

Vehicle.prototype.toString = function () {
    console.log(`${this.make} ${this.model} ${this.year}`)
}

var vehicle = new Vehicle("Honda", "CR-V", 2017)
vehicle.start();
vehicle.toString(); // 'The make, model, and year are Tractor John Deere 1999'

// 4 - Create a constructor function for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

function Car(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
// console.log(Car.prototype)

var car = new Car("Honda", "CR-V", 2017);
car.start();
car.toString(); 

// 5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

function Motorcycle() {
    Vehicle.apply(this, arguments);
    this.numWheels = 2;
}

