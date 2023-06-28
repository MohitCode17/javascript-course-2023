/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 HIGHER ORDER FUNCTIONS 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// In JavaScript, functions are treated as first-class citizens. We can treat functions as values and assign them to another variable, pass them as arguments to another function, or even return them from another function.

// This ability of functions to act as first-class functions is what powers higher order functions in JavaScript.

// Basically, a function which takes another function as an argument or returns a function is known as a higher order function.


// 👉 Callback

// A callback is a function which can be passed as parameter to other function. See the example below.

const callback = (n) => {
  return n ** 2;    // 4**2 = 16
};

// function that takes other function as a callback

function cube(callback, n) {
  return callback(n) * n;   // 1. callback(4) => 16 * 4  => output 64
}
// console.log(cube(callback, 4));


// 👉 Function return function

// Higher order functions return function as a value

const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
}
// console.log(higherOrder(12)(10)(5));

// Let us see were we use callback functions. For instance the forEach method uses call back.

const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let sum = 0;
  const callback = function(num){
      sum += num;
  }
  arr.forEach(callback);
  return sum;
}

// console.log(sumArray(numbers));


// The above example can be simplified as follows:

const sumArray1 = arr => {
  let sum = 0;
  arr.forEach(function(num){
      sum += num;
  });
  return sum;
}
console.log(sumArray1(numbers))


// 👉 Setting Time

// In JavaScript we can execute some activities in a certain interval of time or we can wait for some time to execute some activities.

// ✋ SetInterval Function

// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time.

// syntax: setInterval(callback(function), time);

// setInterval(() => {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let rgb = `rgb(${red}, ${green}, ${blue})`
//     console.log(rgb);
// }, 1000);   // 1 sec


// ✋ SetTimeout Function

// In JavaScript, we use setTimeout higher order function to execute some action at some time in the future.

// syntax: setTimeout(function(callback), time)

setTimeout(() => {
  console.log(`Your time is over now!`);
}, 5000)    // 5 sec