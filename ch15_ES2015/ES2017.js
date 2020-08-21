

let obj = {first:'Steven', last: 'Kao', age: 32, address:'U104/1 Courtney', other:{1:'Momo'}};

let obj1 = Object.assign({}, obj)
obj1.first = 'Ava'


let obj2 = {...obj, first: 'Ava'}
obj2.other[2] = 'Molly'

console.log(obj1)
console.log(obj2)



// let {first, last, ...data} = obj;
// console.log(first, last, data)