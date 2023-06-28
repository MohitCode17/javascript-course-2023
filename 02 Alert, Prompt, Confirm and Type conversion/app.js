// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 ALERT, PROMPT AND CONFIRM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 Alert: Used to invoke a mini window(modal window) with a message and waits for the user to press “OK”.

alert('Welcome Users');

// 👉 Prompt: Shows modal window with a text message and take user input as string.

console.log(prompt('Enter you age', 18));

// 👉 Confirm: Displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

console.log(confirm('Are you sure to want to delete?'));













// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 TYPE CONVERSION 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
/*
Most of the time, operators and functions automatically convert the values given to them to the right type. Type conversion (or typecasting) means transfer of data from one data type to another.


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