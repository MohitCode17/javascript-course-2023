// 👉 CLASS BASED INHERITANCE

class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);  // when CurrentAccount constructor call first call super method
  }

  takeBusinessLoan(amount) {
    console.log('Taking business loan: ' + amount);
  }
}

class SavingAccount extends BankAccount {
  transactionLimit = 10000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takePersonalLoan(amount) {
    console.log('Taking personal loan: ' + amount);
  }
}

const mohitAccount = new SavingAccount('Mohit Gupta', 500);
mohitAccount.deposit(500);
mohitAccount.withdraw(100);
mohitAccount.takePersonalLoan(40000);
console.log(mohitAccount);