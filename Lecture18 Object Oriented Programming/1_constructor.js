/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 OBJECT ORIENTED PROGRAMMING 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

/*
👉 WHAT IS OOP?
Object-oriented programming (OOP) is a programming paradigm that focuses on organizing code into reusable and modular structures called objects. JavaScript, despite being a prototype-based language, supports object-oriented programming concepts.


👉 WHY OOP?
Object-oriented programming (OOP) offers several benefits that make it a popular and widely used programming paradigm. Here are some reasons why OOP is favored:

➡️ Modularity and Code Reusability: OOP allows you to break down complex systems into smaller, self-contained objects. Objects encapsulate data and behavior, making it easier to understand, maintain, and update code.

➡️ Abstraction: OOP allows you to create abstract representations of real-world objects or concepts. By abstracting away unnecessary details, you can focus on essential characteristics and behaviors.

➡️ Encapsulation: OOP supports encapsulation by bundling data (properties) and functions (methods) within objects. Objects hide their internal state, allowing controlled access through methods. This data hiding provides data integrity and protects it from external interference. Encapsulation also facilitates code maintenance, as changes to the internal implementation of an object do not affect the code that uses it.

➡️ Inheritance: Inheritance allows objects to inherit properties and methods from other objects. It promotes code reuse and helps establish a hierarchical relationship between objects.

➡️ Polymorphism: Polymorphism allows objects of different types to be treated as instances of a common superclass. It enables the use of the same interface to perform different actions based on the actual object type.

➡️ Scalability and Maintainability: OOP promotes scalability by dividing a system into smaller, manageable objects. This modular structure simplifies the addition or modification of features without affecting the entire codebase.
*/

// 👉 CONSTRUCTOR FUNCTION

// A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

// ✋ Example:--

// create constructor function

function BankAccount(customerName, balance = 0) {
  // Properties of constructor function
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  // methods
  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = function (amount) {
    this.balance -= amount;
  };
}

// 💯 NOTE: AS ABOVE CONSTRUCTOR FUNCTION WE DEFINE TWO METHODS FOR DEPOSIT AND WITHDRAW MONEY, BUT WE DON'T DEFINE METHODS LIKE THAT. BECAUSE JAVASCRIPT RESERVE MEMORY SPACE FOR EACH ONJECT WHICH CREATED BY CONSTRUCTOR METHOD. WE DON'T NEED 'METHODS' FOR EACH OBJECT AS IT RESERVED THE SPACE IN MEMORY. HENCE THIS IS JUST FOR KNOWLEDGE. WE'LL SEE HOW TO TACKLE WITH THIS PROBLEM SOON.

// Creating an object using the constructor

// const mohitAccount = new BankAccount('Mohit Gupta', 1000);
// const rohanAccount = new BankAccount('Rohan Singh');

// mohitAccount.deposit(2000);
// rohanAccount.deposit(5000);

// mohitAccount.withdraw(1500);

// console.log(mohitAccount, rohanAccount);





// ==============================================================================================================

// 👉 Now let's take Input from user and do same this as above (DOM MANIPULATION)

const accounts = []; // store all accounts in array, we'll not use any kind of Database for now.

// Create Account

const createAccountForm = document.querySelector("#create-account");
const customerName = document.querySelector("#customerName");
const initialBalance = document.querySelector("#initialBalance");

createAccountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create Object using Constructor function
  const account = new BankAccount(customerName.value, +initialBalance.value);

  // Store newly created account into accounts storage.
  accounts.push(account);
  console.log(accounts);
});


// Deposit Amount

const depositForm = document.querySelector('#deposit-amount');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#depositAmount');

depositForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  account.deposit(+amount.value);
  console.log(accounts);
})
