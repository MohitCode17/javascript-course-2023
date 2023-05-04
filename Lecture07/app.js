// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 FUNCTION IN JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

/*
A function is a reusable block of code or programming statements designed to perform a certain task.
Function makes code clean, easy to read, reusable and easy to test.
*/


// 👉 FUNCTION DECLARATION

// function sayMyName() {
//     // Body of function
//     console.log('Hello Mohit !');
// }
// sayMyName();   // calling a function or envoked a function


// 👉 FUNCTION EXPRESSION
  
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable.

// const square = function(n) {
//     console.log(n * n);
// }
// square(3);  // variable becomes the function


// 👉 PASSING PARAMETER AND ARGUMENTS

// const greeting = function(name){    // parameter
//     console.log(`Good morning ${name}, Have a nice day.`);
// }
// greeting("mohit");  // "mohit" is a argument.


// 👉 PASSING DEFAULT VALUE TO PARAMETER

// Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used.

// const greeting = function(name="user"){
//     console.log(`Welcome ${name}, Have a nice day`);
// }

// greeting();
// greeting("mohit");


// 👉 FUNCTION RETURNING VALUE

// Function can also return values, if a function does not return values the value of the function is undefined.

// const ageCalculator = function(birthYear, year=2023){
//     const age = year - birthYear;
//     return age;
// }
// console.log(ageCalculator(1998));


// const tipCalculator = function(food, tip){
//     const tipPercentage = tip / 100;
//     const tipAmount = food * tipPercentage;
//     const totalBillAmount = food + tipAmount;
//     return totalBillAmount;
// }
// console.log(tipCalculator(1000, 10));


// 👉 ARROW FUNCTION

// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

// Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

// const square = n => n * n;
// console.log(square(2));


// const changeToUpperCase = arr => {
//     const newArr = []
//     for (const element of arr) {
//         newArr.push(element.toUpperCase())
//     }
//     return newArr
// }

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(changeToUpperCase(countries))


// 👉 PASSING FUNCTION AS AN ARGUMENT (HIGHER ORDER FUNCTION)

let upperCase = function(str){
    return str.toUpperCase();
}

let lowerCase = function(str){
    return str.toLowerCase();
}

let transformer = function(str, fun){
    return fun(str);
}

// console.log(transformer("mohit", upperCase));   // MOHIT
// console.log(transformer("MOHIT", lowerCase));   // mohit


// 👉 FUNCTION RETURN ANOTHER FUNCTION

const demoFun = function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    };
};

// demoFun("You are good programmer")("mohit");


// 👉 IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)

(function(){
    // console.log("This function will never execuate again !");
})();



// 👉 FUNCTION WITH UNLIMITED PARAMETERS

// Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments.

function sum(...nums) { // rest operator syntax
let sum = 0;
for (let num of nums) {
    sum += num;
}
return sum;
}
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));