//constructor function
function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function bark() {
    console.log(this.name + " just barked!")
  }
  return this
}

var rusty = new Dog('Rusty',3);

// rusty.bark()

// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. 

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber = function multiplyFavoriteNumber(num) {
    return num * favoriteNumber;
  }
}

var peter = new Person('Peter', 'Kao', 'Green', 3);
console.log(peter.multiplyFavoriteNumber(4));

// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
  Parent.apply(this, arguments);
}