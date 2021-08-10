// 1. Car class creates car instances
// 2. car instance has model, make, and odometer properties
// 3. car instance has drive() and driveAsync() methods

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

module.exports = Car;