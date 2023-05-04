/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 TYPE CASTING IN JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

👉 TYPE CONVERSION

Type conversion (or typecasting) means transfer of data from one data type to another.


➡️ Explicit Typecasting

When we manually typecast one data to another one called exlicity typecasting. Explicit type casting is normally done to make data compatible with other variables. 

Examples of typecasting methods are parseInt(), parseFloat(), toString(), toNumber().


➡️ Implicit Typecasting

Sometimes JavaScript automatically converts one data type to another. This type of conversion is known as implicit conversion.

*/

// 👉 Example of Explicit Typecast

// let food = Number(prompt("Amount of food you spent ?"));
// let tipAmount = Number(prompt("Tip amount %"));
// let tip = (food * (tipAmount / 100));
// const totalBill = food + tip;
// console.log(totalBill);

// When we prompt something, it came in form of string, so that we manually change to number


// 👉 Example of Implicit Typecast

// console.log(10 + "20"); // type cast number 10 as string

// console.log(9 - "5");  // type cast string 5 as number

// console.log( "Java" + "Script"); // both are strings so this is going concat

// console.log("Mohit" - "Gupta"); // Not a number 

// console.log(true + true);   // true is 1 in js
// console.log(true + false);   // false is 0 in js
// console.log(false + true);
// console.log(false - true);