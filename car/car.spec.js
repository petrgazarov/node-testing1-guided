const Car = require('./car');

// 1. Write a minimal test case that fails
// 2. Make it pass! (minimal code necessary)
// 3. Refactor / improve code

describe('Car class', () => {
  it('can create a car instance', () => {
    const car = new Car();

    expect(car).toBeInstanceOf(Car);
  });

  it('creates a car with a make property', () => {
    const car = new Car('Toyota', 'Prius');

    expect(car).toHaveProperty('make');
  });

  it('creates a car with a model property', () => {
    const car = new Car('Toyota', 'Prius');

    expect(car).toHaveProperty('model');
  });

  it('creates a car with the model and make passed as arguments', () => {
    const car = new Car('Toyota', 'Prius');

    expect(car).toEqual({ make: 'Toyota', model: 'Prius' });
  });
});