console.log(this);

function getData() {
  console.log(this);
}
getData();

class Car {
  getData() {
    console.log(this);
  }
}

const obj = new Car();
obj.getData();
