/*🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 NUMBERS AND OPERATORS IN JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */


// 👉 NUMBERS

// let score = 50;
// console.log(score);     // 50
// console.log(typeof score);  // Return number

// Typeof in JavaScript is an operator used for type checking and returns the data type of the operand passed to it.



/*
👉 ARITHMETIC OPERATORS

Arithmetic operators perform arithmetic on numbers (literals or variables).

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

// Using Priority and Precedence

// 1. Solve () Brackets
// 2. ** Power Operators
// 3. * / % (From Left to Right)
// 4. + - (From Left to Right)



/*
// 👉 COMPARISON OPERATORS

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



// 👉 INCREMENT AND DECREMENT OPERATORS

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


// 👉 LOGICAL OPERATORS

// ➡️ && (Logical AND Operator): Both operands must be true to get a true.
// ➡️ || (Logical OR Operator): Atleast one operands must be true to get a true.

// const check = 4 > 3 && 10 > 5;    // true
// const check = 4 > 3 && 10 < 5;  // false

// const check = 4 > 3 || 10 > 5;
// const check = 4 > 3 || 10 < 5;


// Logical Operators are widely use in conditional statement.