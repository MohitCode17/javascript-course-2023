/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 OBJECT ORIENTED PROGRAMMING 04 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

/*
👉 INHERITANCE

When a class derives from another class. The child class will inherit all the public and protected properties and methods from the parent class. In addition, it can have its own properties and methods. An inherited class is defined by using the extends keyword.

*/

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};


// 👉 Create Another Constructor for Current Account(Sub Constructor)

function CurrentAccount(customerName, balance = 0) {
  // Inherit Properties to Parent Function "BankAccount"
  BankAccount.call(this, customerName, balance);

  // This property belong to currentAccount only
  this.transactionLimit = 50000;
}


// 👉 Linking Prototype of BankAccount to CurrentAccount

CurrentAccount.prototype = Object.create(BankAccount.prototype);


// 👉 Create Another Constructor for Saving Account(Sub Constructor)

function SavingAccount(customerName, balance = 0) {
  // Inherit Properties to Parent Function "BankAccount"
  BankAccount.call(this, customerName, balance)

  this.transactionLimit = 10000;
}

// 👉 Linking Prototype of BankAccount to CurrentAccount

SavingAccount.prototype = Object.create(BankAccount.prototype);

const rohanAccount = new CurrentAccount('Rohan Shetty', 10000);
const riteshAccount = new SavingAccount('Ritest', 5000);

rohanAccount.withdraw(2000);
riteshAccount.deposit(20000);

console.log(rohanAccount);
console.log(riteshAccount);