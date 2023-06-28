/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 BASIC OPERATORS & MATHS 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

/*
We know many operators from school time. They are things like addition +, multiplication *, subtraction -, and so on.

👉 Terms: “unary”, “binary”, “operand”

Before we move on, let’s grasp some common terminology.

➡️ An operand – is what operators are applied to. For instance, in the multiplication of 15 * 10 there are two operands: the left operand is 15 and the right operand is 10.

➡️ An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let x = 2;
x = -x;

console.log( x ); // -2, unary negation was applied

➡️ An operator is binary if it has two operands. The same minus exists in binary form as well:

let x = 2, y = 4;
console.log( y - x ); // 2, binary minus subtracts values


👉 Maths - Some of common operators of maths that JavaScript support

Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016)
/	        Division
%	        Modulus (Remainder)
*/

// let x = 22;
// let y = 4;
// console.log(x + y);     // 26
// console.log(x - y);     // 18
// console.log(x * y);     // 88
// console.log(x / y);     // 5.5
// console.log(x % y);     // 2

// console.log(3**2);  // 9, Power of 3
// console.log(3**3);  // 27, Cube of 3


// 👉 Mathematical Expression

// let result = score * 2 + (4 * 3) - 8 / 2 % 4;
// console.log(result);    // 112


// ➡️ Operator precedence and Priority

// If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.

// From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.

// Parentheses override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (1 + 2) * 2.

// 1. Solve () Brackets
// 2. ** Power Operators
// 3. * / % (From Left to Right)
// 4. + - (From Left to Right)

// ➡️ Assignment

// An assignment = is also an operator. It is used as assignment not equal.


// 👉 Increment and Decrement Operators

// ➡️ Pre Increment

// let count = 0
// console.log(++count)    // First Increment then Print
// console.log(count)    // 1

// ➡️ Post Increment

// console.log(count++);   // First Print then Increment
// console.log(count);  // 1

// ➡️ Pre Decrement

// console.log(--count) // -1
// console.log(count)  // -1

// ➡️ Post Decrement

// let count = 0
// console.log(count--) // 0
// console.log(count)   // -1


/*
👉 Comparison Operators

Comparison operators are used for compare expressions, number value and statements, return value will be a boolean value.

Operator	Description
<	        Less than
>	        Greater than
==	        Loose equality
===	        Strict equality(Check type also)
!=          Loose not equality
!==         Strict not equality(Check type also)

*/

// console.log(3 >= 2)    // true
// console.log(3 < 2)     // false         
// console.log(3 == 2)    // false
// console.log(3 != 2)    // true
// console.log(3 == '3')   // true
// console.log(3 === '3')  // false(number === string)
// console.log(3 !== '3')  // true
// console.log(3 !== 3)    // false

// console.log('mango'.length == 'avocado'.length) // false
// console.log('mango'.length < 'avocado'.length)  // true  
// console.log('milk'.length != 'meat'.length)  // false



// 👉 Boolean and Truthy, falsy value

// Boolean is the result, All comparison operators return a boolean value:

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.


// 👉 Truthy value

// ➡️ All numbers(positive and negative) are truthy except zero,
// ➡️ All strings are truthy except an empty string (''),
// ➡️ The boolean 'true',


// 👉 Falsy value

// 0
// null
// undefined
// NaN  
// the boolean 'false'
// '', "", ``, empty string


// 👉 Logical Operators

// ➡️ && (Logical AND Operator): Both operands must be true to get a true.
// ➡️ || (Logical OR Operator): Atleast one operands must be true to get a true.

// const check = 4 > 3 && 10 > 5;    // true
// const check = 4 > 3 && 10 < 5;  // false

// const check = 4 > 3 || 10 > 5;
// const check = 4 > 3 || 10 < 5;

// Logical Operators are widely use in conditional statement.











// 👉================== Maths Library in JavaScript =====================

// In JavaScript the Math library provides a lots of methods to work with numbers.

const PI = Math.PI

// console.log(PI);

console.log(Math.round(9.5));    // Rounding to the closest number

console.log(Math.floor(3.9));    // Rounding down

console.log(Math.ceil(3.1));     // Rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10));     // get min value

console.log(Math.max(-5, 3, 20, 4, 5, 10));     // get max value

const randomNum = Math.random();  // creates random number between 0 to 9
console.log(randomNum);

const num = Math.floor(Math.random () * 11);
console.log(num);

console.log(Math.sqrt(121));     // Give square root of number

console.log(Math.pow(3, 2));     // Power 3*3










// 👉================== Date Library in JavaScript =====================


// 👉 Date Object

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

// 👉 Let us format these values to a human readable time format. Example:

const now = new Date();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)