const data = [42, 23, 12, 4, 32, 2];

// for (i in data) {
//   console.log(i); // only index
// }

// for (i of data) {
//   console.log(i); //  the value
// }

const index = data.findIndex((value) => {
  return value < 10;
});

const value = data.find((value) => {
  return value > 10;
});

const filter = data.filter((value) => {
  return value > 10;
});
console.log("index: ", index);
console.log("find element : ", value);
console.log("filter element array: ", filter);

const arr = [
  [2, 4],
  [23, 5],
];
// const newarr = [...arr[0], ...arr[1]];
// console.log(newarr);

const newArr = arr.reduce((acc, cur) => {
  acc.push(...cur);
  return acc;
}, []);
console.log(newArr);
