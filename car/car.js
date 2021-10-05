// Car has make, model and odometer properties
// Car has a drive() method

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.odometer = 0;
  }
}

module.exports = Car;