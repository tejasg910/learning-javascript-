function makeSquare(n) {
  //   console.log(this);
  return n * n;
}

// console.log(makeSquare(4)); //This is called traditional function calling

// const makeSquare = function (n) {
//   return n * n;
// };

// console.log(makeSquare(5));  //This is called anonymous functions

// const makeSquare = (n) => {
//   return n * n;
// };

console.log(makeSquare(2));

// console.log("This is called arrow function");

const obj = {
  name: "tejas",
  fun: function () {
    console.log(this);
  },
};

// console.log(obj.fun());

class User {
  name = "tejas";
  getName = () => {
    console.log(this);
  };
}

const user = new User();
console.log(user.getName());
