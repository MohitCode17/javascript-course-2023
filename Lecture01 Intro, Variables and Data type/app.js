/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 INTRODUCTION TO JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟


👉 WHAT IS JAVASCRIPT ?

➡️ JavaScript, which is abbreviated as JS, is a programming language.

➡️ JavaScript is high-level (High-level languages require the use of a compiler or an interpreter for their translation into the machine code) and Dyanmic typed language.

➡️ It lets us add interactivity to pages e.g. you might have seen sliders, alerts, click interactions, popups, etc on different websites, all of that is built using JavaScript.


👉 FUN FACTS OF JAVASCRIPT

➡️ Initially created by Brendan Eich of NetScape and was first announced in a press release by Netscape in 1995.

➡️ It has a bizarre history of naming; initially, it was named Mocha by the creator, which was later renamed LiveScript. In 1996, about a year later after the release, NetScape decided to rename it to JavaScript.

➡️ JavaScript did not have any relationship with Java.

Read More About History: https://roadmap.sh/guides/history-of-javascript


👉 CLIENT SIDE V/S SERVER SIDE

➡️ Client-side and Server-side in the term of web development, describes where application code runs.

➡️ In web development, the client-side refers to everything in a web application displayed on the client end (end-user device). The browser interprets HTML and CSS on the client-side.

➡️ Whereas, the server-side is where all the request coming from client-side is handled. The working which is performing on the server-side is not visible to the end-user.


👉 WHERE TO ADD JS CODE

1. JavaScript can use in <head></head> tag as well as <body></body> tag using <script></script> tag.

2. JavaScript can use within html element e.g. <button onclick="()=>alert("hello world")"></button>

3. Most efficient way to use external JavaScript, create your javascript file using .js extension and add it to in html file.
*/


// alert("Hyy! I'm from app file");






// 👉 VARIABLES, CONSTANT AND COMMENTS

/*
What is variables ?

Variables are like a containers to store data. Variables store data in a memory location.
When a variable is declared, a memory location is reserved. When value assigned to variable, the memory space will be filled with data.

To declare variables we use keywords like var, let and const. But after ES6 'var' keyword isn't recommended to use.
*/

// var(keyword) age(variable name) =(assignment operator) 23(value);

// var age = 25;
// var age = 23; // Redeclaration of variable (wrong practise, this is reason we avoid 'var' keyword)
// console.log(age);


// let age = 25;
// let age = 24;   // Throw Error: 'age' has already been declared
// age = 24;   // we can change value of age
// console.log(age);


// const age = 25;
// const age = 24;     // Throw Error: 'age' has already been declared
// age = 24;       // Throw Error: Asignment to constant variable.
// console.log(age);

// Constant is more strict than let and var, once we declare varialbe using it, we cannot redeclare or change value of it.

// Priority should be: const > let > var(avoid using it).



/*
👉 VARIABLES NAMING RULES

A variable name should accurately identify your variable. When you create good variable names, your JavaScript code becomes easier to understand and easier to work with. Properly naming variables is really important.

JavaScript also has some rules when it comes to naming variables:

➡️ A variable name must start with a letter (a to z or A to Z), underscore (_), or dollar( $ ) sign.

➡️ A variable name cannot start with a number. After the first letter, we can use digits (0 to 9), for example, message1.

➡️ JavaScript variables are case sensitive. For example, a and A are different variables.

*/


// 👉 COMMENTS

// Comments are very important to make code more readable and to leave remarks in our code. JavaScript does not execute the comment part of our code.

// this is single line of comment

/**
 This is multiple line of comment
 Multiple line can take multiple
 line.
*/






// 👉 DATA TYPES

/*
Data type refers to the type of data that a JavaScript variable can hold. There are eight basic data types in JavaScript that divided into two main categories, primitives and objects.

👉 PRIMITIVE TYPE

A primitive is a value without any properties/methods attached to it. It's basically the simplest form of data in JavaScript. There are 7 types of primitive data type in JavaScript.

➡️ String: A string is a sequence of textual characters. It can contain alphanumeric characters, symbols, spaces, newlines, emoticons, characters from other languages etc.
A string can be denoted using a pair of single quotes (''), or a pair of double quotes ("").

"I am string", 'I am string'.


➡️ Numbers: In programming, generally numbers are categorised into two groups — integers and floats.

An integer is a whole number without a decimal point.   (1, 2, 33, 98)
A float is a number with a decimal point.   (2.3, 8.77)


➡️ Booleans: A Boolean is simply a true or false value. Booleans are used extensively in conditional programming to control program flow by making decisions on the outcomes of given evaluations.


➡️ Undefined: In JavaScript, if we don't assign a value to a variable, the initial value is undefined. In addition to that, if a function is not returning anything, it returns undefined.


➡️ Null: Intentionally absence of value.


➡️ BigInt: Used to store big integer values that are too big to be represented by a normal JavaScript Number


➡️ Symbol: The JavaScript ES6 introduced a new primitive data type called Symbol . Symbols are immutable (cannot be changed) and are unique.
*/

const firstName = "mohit";
const age = 25;
const weight = 69.85;
const isEmployed = true;

let favGame;    // initially it's undefined
favGame = "Cricket"

let favPlayer = null;   // good practise, when you don't want initialize any value, initialize with null.
favPlayer = "Rohit Sharma"

let bigInteger = BigInt(567);

console.log(bigInteger);


/*
👉 NON-PRIMITIVE TYPE

Non-primitive data types is the object. The JavaScript arrays and functions are also objects. For more check out this web developer course online.
*/

// ➡️ Object

const student = {
    name: 'rohan',
    rollNo: 12,
    class: 'XII',
    school: 'Delhi Public School'
}
console.log(student);