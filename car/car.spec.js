// Test away!
const Car = require('./car');

describe('Car class', () => {
  it('can create a car instance', () => {
    const car = new Car();

    expect(car).toBeInstanceOf(Car);
  });

  it('creates cars with make property', () => {
    const car = new Car('toyota');

    expect(car).toHaveProperty('make');
  });

  it('creates cars with model property', () => {
    const car = new Car('toyota', 'prius');

    expect(car).toHaveProperty('model');
  });

  it('creates car with make and model', () => {
    const car = new Car('toyota', 'prius');

    expect(car).toMatchObject({ make: 'toyota', model: 'prius' });
    expect(car).toMatchSnapshot();
  });
});