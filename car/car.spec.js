// Test away!
const Car = require('./car');

describe('Car class', () => {
  it('can create a car instance', () => {
    const car = new Car();

    expect(car).toBeInstanceOf(Car);
  });

  it('creates a car with make property', () => {
    const car = new Car('toyota');

    expect(car).toHaveProperty('make');
  });

  it('creates a car with model property', () => {
    const car = new Car('toyota', 'prius');

    expect(car).toHaveProperty('model');
  });

  it('creates a car with make and model', () => {
    const car = new Car('toyota', 'prius');

    expect(car).toMatchObject({ make: 'toyota', model: 'prius' });
    expect(car).toMatchSnapshot();
  });

  it('creates a car with odometer property', () => {
    const car = new Car('toyota', 'prius');

    expect(car).toHaveProperty('odometer');
  });

  it('creates a car with odometer set to 0', () => {
    const car = new Car('toyota', 'prius');

    expect(car.odometer).toBe(0);
  });
});