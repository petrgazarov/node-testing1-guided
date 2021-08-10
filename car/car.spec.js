// Test away!
const Car = require('./car');

describe('Car class', () => {
  it('can create a car instance', () => {
    const car = new Car();

    expect(car).toBeInstanceOf(Car);
  });


});