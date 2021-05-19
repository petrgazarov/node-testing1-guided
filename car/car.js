class Car {

  constructor(make, model) {
    this.owner = "Dan"
    this.model = model
    this.odometer = 0
    this.make = make
  }

  drive(miles) {
    // 2
    this.odometer += miles
  }
}

module.exports = Car
