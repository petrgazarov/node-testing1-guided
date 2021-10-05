const Car = require('./car');

// 1. Write a minimal test case that fails
// 2. Make it pass! (minimal code necessary)
// 3. Refactor / improve code

describe('Car class', () => {
  let car;

  beforeEach(() => {
    car = new Car('Toyota', 'Prius');
  });

  it('can create a car instance', () => {
    expect(car).toBeInstanceOf(Car);
  });

  it('creates a car with a make property', () => {
    expect(car).toHaveProperty('make');
  });

  it('creates a car with a model property', () => {
    expect(car).toHaveProperty('model');
  });

  it('creates a car with the model and make passed as arguments', () => {
    expect(car).toMatchObject({ make: 'Toyota', model: 'Prius' });
  });

  it('has an odometer property that is set to 0', () => {
    expect(car).toHaveProperty('odometer');
    expect(car.odometer).toBe(0);
  });

  describe('drive()', () => {
    
  });
});