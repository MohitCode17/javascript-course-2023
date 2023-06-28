// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 INTRODUCTION TO JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

/*
👉 What is JavaScript ?

➡️ JavaScript is a dynamic typed programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.

➡️ JavaScript is high-level (High-level languages require the use of a compiler or an interpreter for their translation into the machine code).


👉 Why is it called JavaScript?

When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.

But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.


👉 client Side 🆚 Server Side

➡️ Client-side and Server-side in the term of web development, describes where application code runs.

➡️ In web development, the client-side refers to everything in a web application displayed on the client end (end-user device).

Example: You go to google.com and search your input queries, what google does it shows the result according to your search queries. You can see it on your browser.

➡️ Whereas, the server-side is where all the request coming to client-side is handled. The working which is performing on the server-side is not visible to the end-user.

Example: You search something on google.com and you can see the result, but where it comes from? where the data stores we cannot see.


👉 How to Use JavaScript in HTML

Just like with CSS, JavaScript can be used in HTML in various ways, such as:

1. Inline JavaScript
Here, you have the JavaScript code in HTML tags in some special JS-based attributes.

<button onclick="alert('You just clicked a button')">Click me!</button>

This is an example of inline JavaScript. The value of onclick can be some Match calculation, a dynamic addition to the DOM – any syntax-valid JavaScript code.

2. Internal JavaScript, with the script tag
Just like the style tag for style declarations within an HTML page, the script tag exists for JavaScript. Here's how it's used:

<script>
	function(){
        alert("I am inside a script tag")
	}
</script>

3. External JavaScript
You may want to have your JavaScript code in a different file. External JavaScript allows this. For such uses-cases, here's how it's done:

// index.html
<script src="./script.js"></script>

// script.js
alert("I am inside an external file");

The src attribute of the script tag allows you to apply a source for the JavaScript code. That reference is important because it notifies the browser to also fetch the content of script.js.

Notice the .js extension? That's the extension for JavaScript files, just like HTML has .html.

*/

// 👉 Our first JavaScript Code:-

console.log('Welcome to Ultimaze JavaScript Course');

// Console.log is used to print something on console developer window, which is inbuilt in crome browser. If usually use to debug your code.













// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 FUNDAMENTALS OF JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 ================ Variable, Constants and Comments =====================

/*
👉 What is variables ?

A variable is a “named storage” or a container to store data. When a variable is declared, a memory location is reserved for a variable. When value assigned to variable, the memory space will be filled with data.

To create a variable in JavaScript, use the "let" keyword.
*/

// The statement below creates (in other words: declares) a variable with the name “greet”:
let greet;

// Now, we can put some data into it by using the assignment operator =:
greet = 'Have a nice day.';

console.log(greet); // access it using the variable name:

// we can combine the variable declaration and assignment into a single line:
let message = 'Hello';


/*
👉 var instead of let
In older scripts, you may also find another keyword: var instead of let:

var message = 'Hello';
The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.
*/


/*
We can also declare two variables and copy data from one into the other.

let greet = 'Hello Everyone!';

let message;

// copy 'Hello Everyone' from greet into message
message = greet;

// now two variables hold the same data
console.log(greet); // Hello world!
console.log(message); // Hello world!
*/


/*
👻⚔️ Declaring twice triggers an error

A variable should be declared only once. A repeated declaration of the same variable is an error:

let message = "Hello";

// repeated 'let' leads to an error

let message = "Hy"; // SyntaxError: 'message' has already been declared

So, we should declare a variable once and then refer to it without let.
*/


// 👉 Constants

// To declare a constant (unchanging) variable, use const instead of let:

// const dateOfBirth = '17-01-1998';
// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

const dateOfBirth = '17-01-1998';

dateOfBirth = '17-01-2000'; // error, can't reassign the constant!

// Constant is more strict than let, When you are sure that a variable will never change, they can declare it with const


/*
👉 Variable Naming Rules

A variable name should accurately identify your variable. When you create good variable names, your JavaScript code becomes easier to understand and easier to work with. Properly naming variables is really important.

JavaScript also has some rules when it comes to naming variables:

➡️ A variable name must start with a letter (a to z or A to Z), underscore (_), or dollar( $ ) sign.
➡️ A variable name cannot start with a number. After the first letter, we can use digits (0 to 9), for example, message1.
➡️ JavaScript variables are case sensitive. For example, a and A are different variables.
*/


// 👉 Comments

// Comments are very important to make code more readable and to leave remarks in our code. JavaScript does not execute the comment part of our code.

// this is single line of comment

/**
 This is multiple line of comment
 Multiple line can take multiple
 line.
*/














// 👉 ================ Data Types =====================

/*
Data type refers to the type of data that a JavaScript variable can hold. There are 8 basic data types in JavaScript that divided into two main categories, primitives and objects.

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

Non-primitive data types is the object. The JavaScript arrays and functions are also objects.
*/

// ➡️ Object

const student = {
    name: 'rohan',
    rollNo: 12,
    class: 'XII',
    school: 'Delhi Public School'
}
console.log(student);


// 👉 The typeof operator

// The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"