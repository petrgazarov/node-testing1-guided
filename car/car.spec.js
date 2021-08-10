const Car = require('./car');

describe('Car class', () => {
  let car;

  beforeEach(() => {
    car = new Car('toyota', 'prius');
  });

  it('can create a car instance', () => {
    expect(car).toBeInstanceOf(Car);
  });

  it('creates a car with make property', () => {
    expect(car).toHaveProperty('make');
  });

  it('creates a car with model property', () => {
    expect(car).toHaveProperty('model');
  });

  it('creates a car with make and model', () => {
    expect(car).toMatchObject({ make: 'toyota', model: 'prius' });
    expect(car).toMatchSnapshot();
  });

  it('creates a car with odometer property', () => {
    expect(car).toHaveProperty('odometer');
  });

  it('creates a car with odometer set to 0', () => {
    expect(car.odometer).toBe(0);
  });

  describe('drive()', () => {
    it('has a drive method', () => {
      expect(car.drive).toBeDefined();
      expect(car.drive).toBeInstanceOf(Function);
      expect(car.drive).toBe(Car.prototype.drive);
    });

    it('increases the odometer', () => {
      expect(car.odometer).toBe(0);
      car.drive(5);
      expect(car.odometer).toBe(5);
    });

    it('works with multiple arguments', () => {
      expect(car.odometer).toBe(0);
      car.drive(5, 10, 21);
      expect(car.odometer).toBe(36);      
    });
  });
});