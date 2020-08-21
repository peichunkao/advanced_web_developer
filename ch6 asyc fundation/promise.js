// Promise Example
// var newPromise = new Promise((resolve, reject) => {
//   var num = Math.random();
//   if (num > 0.5) {
//     resolve(num)
//   } else {
//     reject(num)
//   }
// })

// newPromise.then(result => {
//   console.log("Success: " + result);
//   }).catch(error => {
//     console.log("Reject: " + error);
// });

// Promise + setTimeout
// var newPromise = new Promise((resolve, reject) => {
//   setTimeout(()=> {
//     resolve("Request has been resolved.")
//   },1000)
// })

// newPromise.then(response=> {
//   console.log(response);
// })

async function f() {
  let promise = new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve("Success")
    },1000);
  })

  let response1 = await promise;
  let response2 = await promise;
  let response3 = await promise;
  console.log(response1);
  console.log(response2);
  console.log(response3);
}

f();

// function f() {
//   return Promise.resolve(1);
// }

// f().then(console.log); // 1