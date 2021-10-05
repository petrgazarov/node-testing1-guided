// Car has make, model and odometer properties
// Car has a drive() method

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.odometer = 0;
  }

  drive(distance) {
    this.odometer += distance;
  }

  async driveAsync(distance) {
    this.odometer += distance;
  }
}

module.exports = Car;