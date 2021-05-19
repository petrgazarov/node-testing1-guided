class Car {

  constructor(make, model) {
    this.owner = "Dan"
    this.model = model
    this.odometer = 0
    this.make = make
  }

  drive(miles) {
    this.odometer += miles
    return this.odometer
  }
}

module.exports = Car
