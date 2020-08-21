function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function () {
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function () {
    this.isRunning = false;
}

Vehicle.prototype.honk = function () {
    if(this.isRunning) {
        console.log("beep!")
    } else {
        console.log("turn on first!")
    } 
}

var car1 = new Vehicle('Toyota','Rav4','2020')
// car1.honk();
// car1.turnOn();
// car1.honk();
// car1.turnOff();
// car1.honk();


// Exercise
// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
  }
/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/


Person.prototype.fullName = function () {
    console.log(this.firstName + " " + this.lastName);
}

// var person = new Person("Elie", "Schoppik", "purple", 34)
// person.fullName() // "Elie Schoppik"

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.

Person.prototype.family = [];

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.


Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/

Person.prototype.addToFamily = function (person) {
    if(person instanceof Person && (this.family.indexOf(person) === -1)) {
        this.family.push(person)
    }
    return this.family.length
}

var person = new Person("Elie", "Schoppik", "purple", 34)
var anotherPerson = new Person()
console.log(person.addToFamily(anotherPerson)); // 1
console.log(person.addToFamily(anotherPerson)); // 1
console.log(person.family.length) // 1

console.log(person.addToFamily("test")); // 1
console.log(person.addToFamily({})); // 1
console.log(person.addToFamily([])); // 1
console.log(person.addToFamily(false)); // 1
console.log(person.family.length) // 1

// PART II 

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array. 

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/

Array.prototype.map = function (callback) {
    var newArray = [];
    for(var i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

String.prototype.reverse = function () {
    var newArray=[];
    for(var i = this.length -1; i >= 0 ; i--) {
        newArray = newArray + this[i];
    }
    return newArray;
}

var string = "12345";
console.log(string.reverse())