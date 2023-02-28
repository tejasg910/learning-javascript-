class User {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  setName(name) {
    this.name = name;
  }
  setBalance(balance) {
    this.balance = balance;
  }
}

//methods you write in the class they work on the state variable
// at the time of object creation memory is allocating the memory for the class type
//constructor is called when object is created
// inside the constructor you can initialize the member functions

const virat = new User("virat", 10000);
console.log(virat);
