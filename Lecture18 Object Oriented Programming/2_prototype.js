/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 OBJECT ORIENTED PROGRAMMING 02 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

/* 
👉 PROTOTYPE

The prototype is a fundamental concept related to OOP. Each object in JavaScript has a prototype, which serves as a blueprint or template for creating other objects. The prototype property contains a reference to an object and when a constructor is used to instantiate or create a new object, .prototype is set as the prototype of the new object.

The prototype is an object itself and contains properties and methods that are shared among all instances created from it. When you access a property or method on an object, JavaScript first checks if the object itself has that property or method. If not, it looks up the prototype chain to find the property or method on the prototype object.

By using prototypes, you can achieve efficient code reuse because all instances of an object share the same prototype, reducing memory consumption. Additionally, prototypes allow you to add or modify properties and methods for all instances of an object at once by modifying the prototype.
*/

// ✋ Example:--

// create constructor function

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

// 👉 Add Methods to Object Prototype to reuse the methods for another objects

// console.log(BankAccount.prototype); // Return blank Object "{}"

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount;
}

// console.log(BankAccount.prototype); // Return Object "{}" with having methods as above

// Creating an object using the constructor

const mohitAccount = new BankAccount('Mohit Gupta', 30000);
const rohanAccount = new BankAccount('Rohan Singh', 1000);

mohitAccount.withdraw(10000);
rohanAccount.deposit(10000);

console.log(mohitAccount);
console.log(rohanAccount);