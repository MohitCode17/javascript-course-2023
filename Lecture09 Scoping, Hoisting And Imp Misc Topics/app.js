// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 IMPORTANT TOPICS FOR INTERVIEW POINT OF VIEW 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟


// 👉 VARIABLE SCOPING

// Scope refers to the visibility of a variable or how it can be used after it is declared.

// Variables declared using the "var" keyword are scoped to the function in which they are created, or if created outside of any function, to the global object.

// let and const are block scoped, meaning they are only accessible within the nearest set of curly braces (function, if-else block, or for-loop).


// function scopeVariable(){
//     var x = 10; // function scope
//     let y = 12; // block scope
//     const z = 30;   // block scope

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// scopeVariable();
// console.log(x); // error: X is not defined
// console.log(y); // error
// console.log(z); // error



// var bar = 'bar';    // global scope

// if (true) {
//     console.log(bar);
//     let baz = 'baz';    // block scope
//     const qux = 'qux';  // block scope
// }

// console.log(bar); // bar
// console.log(baz); // ReferenceError: baz is not defined
// console.log(qux);



// let a = "hello";    // global scope
// function greet() {
//   let b = "World";
//   console.log(a +" " + b);   // hello World
// }

// greet();
// console.log(a + b);    // b is not defined because of function or block scope




// 👉 VARIABLE DECLARATION

/*
➡️ Using Var

var a;
var a;
There is no problem to redeclare same variable name using var.


➡️ Using Let

let a;
let a;
But With let keyword got error: Identifier 'a' has already been declared, Yes we can change value of it.

let a = "Mohit";
a = "Rohan";


But In this example there is no error. JavaScript treat both as different variable.

let a;  // Global Variable
{
    let a;  // Block Variable with can only access inside the block.
}


➡️ Using Const
const a;
const a;

Got Error: Missing initializer in const declaration

We cannot redeclare using const as well we cannot change the value of it.
*/



// 👉 VARIABLE SHADOWING

// When a variable declared within a certain scope (decision block, method, or inner class) has the same name as a variable declared in an outer scope, occur variable shadowing.

function func() {
    let a = 'Hello';    // block scope or function scope
     
    if (true) {
        let a = 'Hello JavaScript';  // block scope
        console.log(a); // access inside of this block
    }
     
    console.log(a);
}
// func();


// 👉 ILLEGAL VARIABLE SHADOWING

// While shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite.

// function func() {
// 	var a = 'Geeks';
// 	let b = 'Geeks';
	
// 	if (true) {
// 		let a = 'GeeksforGeeks'; // Legal Shadowing
// 		var b = 'Geeks'; // Illegal Shadowing
// 		console.log(a); // It will print 'GeeksforGeeks'
// 		console.log(b); // It will print error
// 	}
// }
// func();




// 👉 HOISTING IN JAVASCIRPT  🌟🌟

// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration or we can say "moved" up to the top of their module/function-level scope.

// Note that the declaration is not actually moved - the JavaScript engine parses the declarations during compilation and becomes aware of declarations and their scopes.


// console.log(a); // undefined
// var a = 1;
// console.log(a); // 1

// Variables declared via let and const are hoisted as well. However, unlike var and function, they are not initialized and accessing them before the declaration will result in a ReferenceError exception. The variable is in a "temporal dead zone" from the start of the block until the declaration is processed.


// ➡️ Function Declaration

// console.log(foo);
// foo();

// function foo() {
//   console.log('FOOOOO');
// }

// console.log(foo);


// ➡️ Function Expression

// console.log(bar);

// bar(); // Uncaught TypeError: bar is not a function

// var bar = function () {
//   console.log('BARRRR');
// };

// console.log(bar);

// Function declarations have the body hoisted while the function expressions (written in the form of variable declarations) only has the variable declaration hoisted.




// 👉 LEXICAL SCOPING

// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

const myVar = "value100";

function myApp(){
  const myVar = "value1";

  function myFunc(){
    const myVar = "value10";
    console.log("inside myFunc", myVar);
  };

  console.log(myVar);
  myFunc();
}

// myApp();