/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 OBJECT ORIENTED PROGRAMMING 03 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

/*
👉 CLASSES

Classes are a blueprint for creating objects. A class encapsulates data and functions that manipulate data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
*/


class BankAccount{
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const mohitAccount = new BankAccount('Mohit Gupta', 1000);
const rohanAccount = new BankAccount('Rohan Singh', 2000);

mohitAccount.deposit(2000);
rohanAccount.withdraw(1000);

console.log(mohitAccount, rohanAccount);