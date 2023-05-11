// 🌟🌟🌟🌟🌟🌟🌟🌟 OBJECTS IN JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟

/*
In JavaScript, An object is an unordered collection of key-value pairs. Each key-value pair is called a property. The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.
*/


// 👉 CREATING AN EMPTY OBJECT

let person = {};
// console.log(typeof car);    // object

person = {
  name: "Mohit gupta",
  age: 25,
  city: "Delhi",
  country: "India",
  "phone number": 98999999999,
  skills: ["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB"],
  isMarried: false,
};

// console.log(person);


// 👉 GETTING VALUES FROM AN OBJECT

/* 
We can access values of object using two methods:

1. Using (.) followed by key name if the key-name is a one word
2. Using square bracket and a quote
*/

// console.log(person.name);
// console.log(person.skills);
// console.log(person['phone number']);


// 👉 MODIFY & ASSIGN NEW VALUE TO OBJECT

// person['designation'] = "Mern Developer";   // assign new value
// person['phone number'] = 9898989898;    // modify value
// console.log(person);


// 👉 DELETE PROPERTY TO OBJECT

// delete person.designation;  // return value always true

// console.log(person);


// 👉 CREATE METHODS TO OBJECT

// Methods is nothing but object property(key) holding function as "value".

const car = {
  name: "Fortuner",
  model: 2022,
  price: 3500000,
  color: "White",

  getCarDetails: function () {
    return `I have ${this.color} ${this.name} and price of my car is ${this.price} rupees.`;
  },
};
// console.log(car.getCarDetails());

// "car" object has getCarDetails properties. The getCarDetails is function inside the "car" object and we call it an object method. The "this" key word refers to the object itself.



// 👉 "THIS" KEYWORD

// In JavaScript, the "this" keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.


// ➡️ How to Call this By Itself
// If we call this by itself, meaning not within a function, object, or whatever, it will refer to the global window object.

// console.log(this);


// ➡️ How to Call this in an Object Method

// const employee = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   getThis: function () {
//     return this;
//   },
// };

// console.log('this in object method', employee.getThis());

// we can use this to access other properties and methods from the same object as we see above in examples


// ➡️ How to Call this in a Function

// If we call this within a function like in the following example:

function test() {
    console.log('this in a function', this);
}
// test()

// this will now refer again to the general window object


// ➡️ A note about arrow functions

// In arrow functions, JavaScript sets the this lexically. This means that the arrow function doesn't create its own execution context but inherits the this from the outer function where the arrow function is defined.

// In most cases, this means this will refer to the window object as well:

const newTest = () => {
    console.log('this is a arrow function this', this);
}

// newTest();


// It's important to notice this because, for example, if we try to implement an arrow function to it as an object method, we won't be able to access the object through the this keyword:

const employee = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    getThis: () => {
      return this.firstName;
    },
};

// console.log(employee.getThis());    // undefined