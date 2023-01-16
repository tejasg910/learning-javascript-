function value(n) {
  let value = n++;
  return function () {
    return value;
  };
}

const data = value(23);
console.log(data());
console.log(data());
console.log(data());
