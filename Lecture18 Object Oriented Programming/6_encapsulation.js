/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 OBJECT ORIENTED PROGRAMMING 05 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// 👉 Encapculation in OOP

// Encapsulation is one of the fundamental concepts in object-oriented programming (OOP).  Let’s see how we can implement encapsulation using JavaScript.

// By definition, encapsulation describes bundling data and methods that work on that data within one unit, like a class in JavaScript. We often often use this concept to hide an object’s internal representation or state from the outside. This is called information hiding.

// The general idea of this mechanism is simple. For example, you have an attribute that is not visible from the outside of an object. You bundle it with methods that provide read or write access. Encapsulation allows you to hide specific information and control access to the object’s internal state.

// We have methods as getter and setter. As the names indicate, a getter method retrieves an attribute and a setter method changes it. Depending on the methods that you implement, you can decide if an attribute can be read and changed. You may also control if the attribute is read-only or not visible at all. Later, we’ll show you how you can also use the setter method to implement additional validation rules to ensure that your object always has a valid state.

class BankAccount {
  customerName;
  accountNumber;
  #balance = 0; // convension to make properties or method private within the class

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  // Setter method to set balance
  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount is not a valid input");
    }
    this.#balance = amount;
  }

  // Getter method "read only"
  get balance() {
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  // Private method access only within the class
  #calculateInterest(amount) {
    console.log("Calculating interest");
  }

  takeBusinessLoan(amount) {
    // Logic
    this.#calculateInterest(amount);
    console.log("Taking business loan: " + amount);
  }
}

const mohitAccount = new CurrentAccount("Mohit", 2000);

// mohitAccount.balance = 5000;
console.log(mohitAccount.balance);
mohitAccount.takeBusinessLoan(40000);
console.log(mohitAccount);