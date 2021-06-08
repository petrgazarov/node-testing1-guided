class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.odometer = 0;
  }

  drive(...numMiles) {
    this.odometer += numMiles.reduce((acc, curr) => acc + curr, 0)
  }

  async asyncDrive(...numMiles) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.drive(...numMiles));
      }, 100)
    });
  }
}

module.exports = Car;
