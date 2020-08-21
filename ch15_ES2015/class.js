// class Car {
//     constructor(model, year) {
//         this.model = model;
//         this.year = year;
//     };

//     print() {
//         console.log(this.model, this.year)
//     };
// }

// let car1 = new Car('honda', 1988);
// car1.print();

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/
class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }

    multiplyFavoriteNumber(num) {
        return num * this.favoriteNumber;
    }
}

// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("VROOM!")
    }
    toString() {
        console.log(`The make, model, and year are ${this.make}, ${this.model} and ${this.year}.`)
    }
}

var vehicle = new Vehicle("Tractor", "John Deere", 1999)
vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'

class Car extends Vehicle {
    constructor() {
        super(...arguments)
        numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments)
        numWheels = 2
    }
}

var motocycle = new Vehicle("Tractor", "John Deere", 1999)
motocycle.toString()