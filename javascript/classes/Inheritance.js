class Car {
  constructor(speed) {
    this.speed = speed;
  }

  get getSpeed() {
    return this.speed;
  }

  set setSpeed(speed) {
    this.speed = speed;
  }
}

class Bmw extends Car {
  constructor(average, speed) {
    super(speed);
    this.average = average;
  }
}

const car = new Bmw(30, 200);

console.log(car);

console.log(car.getSpeed);
car.setSpeed = 400;
console.log(car.getSpeed);
