function addone (number) {
  console.log(number+1);
}

function forEach(arr, callback) {
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

var arr = [3,4,6,2,1];

forEach(arr, addone);

// var index = arr.findIndex(num => num === 3);
// console.log(index)

// console.log(arr.forEach(num => console.log(num)))

function equalOne(num, index, array) {
  return num === 1;
}

function findIndex(arr, callback) {
  for(var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) {
      return i;
    } 
  }
  return -1;
}

findIndex(arr, equalOne);

// var result = findIndex(arr, equalOne);
// console.log(result);

// console.log(findIndex(arr, equalOne));

// arr.findIndex((num, index) => {
//   if (num === 3)
//     console.log(index);
// });

// arr.findIndex((num, index) => {console.log(num === 3);});

(() => {console.log(-1)})();