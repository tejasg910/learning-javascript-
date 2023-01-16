const num1 = 2;
const num2 = "4";
// console.log(num1 * num2);

const data = 44.235332802832;
let output = data.toPrecision(4);
// console.log(output);

let salary = 32.4232929;
console.log(salary.toFixed(4));

// Math classes

console.log(Math.pow(2, 3)); //cube of 2

console.log(Math.floor(Math.random() * Date.now()));

console.log(Math.sign(7)); //checks weather the number is positive or not for negative number returns -1 for positive returns +1 for zero returns zero

console.log(Math.min(23, 423, 53, 23));
console.log(Math.max(43, 32, 5, 46, 6));

console.log(Math.abs(-10)); //returns the positive value

console.log(Math.round(42.5243)); //output : 43;

console.log(Math.round(-1.9)); //-2;

console.log(Math.ceil(4.4)); // : 4
console.log(Math.ceil(-3.21)); //: -3

console.log(Math.trunc(-214.4232)); //shows only integer value
console.log(Math.floor(-214.4232)); //to the lowest number
console.log(Math.floor(214.4232)); //to the lowest number
