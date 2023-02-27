class Bank {
  constructor(name, balance, accountNumber) {
    this.name = name;
    this.balance = parseFloat(balance);
    this.accountNumber = accountNumber;
  }

  depositAmount(amount) {
    this.balance += parseFloat(amount);
  }

  withdrawAmount(amount) {
    if (amount <= this.balance) {
      this.balance -= parseFloat(amount);
    } else {
      console.log("amount the greater than balance");
    }
  }
}

const generateAccountNumber = () => {
  return Math.round(Date.now());
};

const Rakesh = new Bank("Rakesh", 4000, generateAccountNumber());
console.log(Rakesh);

Rakesh.depositAmount(5000);
console.log(Rakesh);
