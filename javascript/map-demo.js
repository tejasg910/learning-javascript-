const mapArr = new Map([
  [0, "Zero"],
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
]);
mapArr.set(4, "Four");
console.log(mapArr);

console.log(`Element At 3 ${mapArr.get(3)}`);
mapArr.delete(1);
console.log(mapArr);
