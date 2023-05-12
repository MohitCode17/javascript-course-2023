/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 BOOLEAN AND TRUTHY FALSY VALUE 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// 👉 BOOLEAN

// A boolean data type represents one of the two values: true or false. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.

// let isLightOn = true
// let isRaining = false
// let truValue = 4 > 3
// let falseValue = 4 < 3
// console.log(truValue);


// 👉 TRUTHY VALUE

// ➡️ All numbers(positive and negative) are truthy except zero
// ➡️ All strings are truthy except an empty string ('')
// ➡️ The boolean 'true'


// 👉 FALSY VALUE

// 0
// null
// undefined
// NaN  
// the boolean 'false'
// '', "", ``, empty string



// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 MATH LIBRARY IN JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// In JavaScript the Math library provides a lots of methods to work with numbers.

const PI = Math.PI
// console.log(PI);

console.log(Math.round(9.5));    // Rounding to the closest number

console.log(Math.floor(3.9));    // Rounding down

console.log(Math.ceil(3.1));     // Rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10));

console.log(Math.max(-5, 3, 20, 4, 5, 10));

const randomNum = Math.random();  // creates random number between 0 to 9
console.log(randomNum);

const num = Math.floor(Math.random () * 11);
console.log(num);

console.log(Math.sqrt(121));     // Give square root of number

console.log(Math.pow(3, 2));     // Power 3*3



// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 DATE LIBRARY IN JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 DATE OBJECT

// In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.


// 👉 CREATING A TIME OBJECT

// Once we create time object. The time object will provide information about time. Let us create a time object

const timeObj = new Date();
console.log(timeObj);


// ✋ GET FULL YEAR

console.log(timeObj.getFullYear());


// ✋ GET MONTH

console.log(timeObj.getMonth() + 1); // 0 is Jan, 1 is feb and so on.


// ✋ GET DATE

console.log(timeObj.getDate());


// ✋ GET DAY

console.log(timeObj.getDay()) // Sunday is 0, Monday is 1 and Saturday is 6.


// ✋ GET HOURS

console.log(timeObj.getHours());


// ✋ GET MINUTES

console.log(timeObj.getMinutes());


// ✋ GET SECONDS

console.log(timeObj.getSeconds());


// ✋ GET TIME

// This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

// Using getTime()

// const now = new Date();
// console.log(now.getTime());

// Using Date.now()

// const allSeconds = Date.now();
// console.log(allSeconds);



// Let us format these values to a human readable time format. Example:

const now = new Date();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)