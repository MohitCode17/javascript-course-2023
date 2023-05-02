// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 LOOPS AND ITERATIONS 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// Most of the activities we do in life are full of repetitions. Imagine if I ask you to print out from 0 to 100 using console.log(), may be you take 2 to 5 minutes to implement this, but what if it'll increase from 0 to 100000 or more than that, this is'nt possible to do. Such kind of tedious and repetitive task can be carried out using loop.


// 👉 THE FOR LOOP

// Syntax: for(initialization; conditions; increment/decrement){...};

// for(let i=1; i<=10; i++){
//     console.log(i); // this will print 1 to 10 count
// }

// for(let i=10; i>=1; i--){
//     console.log(i); // this will print 10 to 1 count
// }


// ➡️ Example: Print Math's Table

// let number = Number(prompt('Enter any number'));

// for(let i=1; i<=10; i++){
//     console.log(`${number} x ${i} = ${number*i}`);
// }


// 👉 THE WHILE LOOP

// Syntax: while(condition){
//     ....statement
//     increment/decrement
// };


// ➡️ Example: Print all even number from 1 to 100

// let num = 1;

// while(num <= 100){
//     if(num % 2 === 0){
//         console.log(num);
//     }
//     num++;
// }


// ➡️ Example: Iterate each element of array and push into another variable with uppercase countries name

// const countries = ['India', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
// const newCountriesArray = [];

// for(let i=0; i<countries.length; i++){
//     newCountriesArray.push(countries[i].toUpperCase());
// }
// console.log(newCountriesArray);


// ➡️ Example: Find the sum of first 100 n natural numbers

// let firstNaturalNumber = 100, sum = 0;

// for(let i=1; i<=firstNaturalNumber; i++){
//     sum += i;
// }
// console.log(sum);


// 👉 THE DO WHILE LOOP

// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.


// let i = 10;
// do {
//   console.log(i)
//   i++
// } while (i <= 5)    // condition do not match but still print 10;








/**

🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 CONDITIONAL EXPRESSION 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

When you write code, you often want to perform different actions for different decisions. You can use conditional statements in your code to do this.
In JavaScript, we have three conditional statements: if, if...else, and switch.

👉 if

In JavaScript and other programming languages the keyword "if" is to used check if a condition is true and to execute the block code.
However, if the condition is false, we won't see any results.


👉 else

If condition is true the first block will be executed, if not the else condition will be executed.


👉 else...if

If you want to execute more than condition together, You need to use else..if


👉 Switch Case

The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the

Syntax:

switch (expression) {
  case value1:
    Statements executed when the result of expression matches value1
    break; 
  case value2:
    Statements executed when the result of expression matches value2
    break; 
  ...
  case valueN:
    Statements executed when the result of expression matches valueN
    break; 
  default:
    Statements executed when none of the values match the value of the expression
    break; 
}
*/


// ➡️ Example

// let num = 1;
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// }


// ➡️ Example

// let isRaining = false;
// if (isRaining) {
//   console.log('You need a rain coat.')
// } else {
//   console.log('No need for a rain coat.')
// }


// ➡️ Example

// let weather = 'cloudy'
// if (weather === 'rainy') {
//   console.log('You need a rain coat.')
// } else if (weather === 'cloudy') {
//   console.log('It might be cold, you need a jacket.')
// } else if (weather === 'sunny') {
//   console.log('Go out freely.')
// } else {
//   console.log('No need for rain coat.')
// }


// ➡️ Example

// let weather = 'cloudy'
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.')
//     break
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.')
//     break
//   case 'sunny':
//     console.log('Go out freely.')
//     break
//   default:
//     console.log(' No need for rain coat.')
// }



// 👉 BREAK AND CONTINUE STATEMENT

// Break is used to interrupt a loop.

// for(let i = 0; i <= 5; i++){
//     if(i == 3){
//       break;
//     }
//     console.log(i)
// };

// The above code stops if 3 found in the iteration process.



// We use the keyword continue to skip a certain iterations.

// for(let i = 0; i <= 5; i++){
//     if(i == 3){
//       continue
//     }
//     console.log(i)
// }