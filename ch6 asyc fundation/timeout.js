// setTimeout

// setTimeout(()=> console.log("Runs in approx. 200ms"), 2000);

// var timerId = setTimeout(()=> console.log("This function runs in 30 seconds."), 30000)

// setTimeout(()=> {
//   console.log("Canceling the first setTimeout", timerId);
//   clearTimeout(timerId);
// }, 2000);

// setInterval = repeat setTimeout

// var num = 0;

// var timerId = setInterval(()=>{
//   num ++;
//   console.log("num:", num);
//   if (num === 5) {
//     clearTimeout(timerId);
//   }
// },500);

// setInverval Exercisfe
// Example:
// countDown(3) 
// Console output:
//     Timer: 2
//     Timer: 1
//     Ring Ring Ring!!!

function countDown(num) {
  var timerId = setInterval(()=> {
    num--;
    if (num > 0) {
      console.log("Timer: ", num);
    } else {
      clearTimeout(timerId);
      console.log("Ring Ring Ring!!!");
    }
  },1000);
}

countDown(3);