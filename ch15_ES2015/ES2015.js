/* 
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.

var o = {name: 'Elie'}
var o2 = copyObject({}, o)
o2.name = "Tim"
o2.name // 'Tim'
o.name // 'Elie'
*/

function copyObject(obj){
    return Object.assign({},obj)
}

var o = {name: 'Elie'}
var o2 = copyObject({}, o)
o2.name = "Tim"
// console.log(o.name) // 'Elie'
// console.log(o2.name) // 'Tim'

/* 

Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.

checkIfFinite(4) // true
checkIfFinite(-3) // true
checkIfFinite(4. // .toEqual(true
checkIfFinite(NaN) // false
checkIfFinite(Infinity) // false
*/

function checkIfFinite(num){
    return Number.isFinite(num)
}

// console.log(checkIfFinite(4)) // true
// console.log(checkIfFinite(NaN)) // false
// console.log(checkIfFinite(Infinity)) // false

/*

Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array is a finite number, otherwise return false.

var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
areAllNumbersFinite(finiteNums) // true
areAllNumbersFinite(finiteNumsExceptOne) // false
*/

function areAllNumbersFinite(arr){
    var result = true;
    arr.forEach(value => {
        result = result && Number.isFinite(value)
    });
    return result
}

function areAllNumbersFiniteS(arr){
    return arr.every(Number.isFinite)
}

var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
// console.log(areAllNumbersFiniteS(finiteNums)) // true
// console.log(areAllNumbersFiniteS(finiteNumsExceptOne)) // false

/* 

Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array.

var divs = document.getElementsByTagName('div')
divs.reduce // undefined

var converted = convertArrayLikeObject(divs)
converted.reduce // funciton(){}...
*/

function convertArrayLikeObject(obj){
    return Array.from(obj)
}

/*

Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array with all of the arguments that are even numbers.

displayEvenArguments(1,2,3,4,5,6) // [2,4,6]
displayEvenArguments(7,8,9) // [8]
displayEvenArguments(1,3,7) // []
*/

function displayEvenArguments(){
  return Array.from(arguments).filter(val => val % 2 ===0)
}

console.log(displayEvenArguments(1,2,3,4,5,6)) // [2,4,6]

