//----------------------------------------------------------------------------//
// Jest is the unit testing framework maintained by Facebook.
//
// Unit testing is a type of testing that ensures that small units of
// functionality in a project are maintained. Unit tests are written in code
// (usually the same language as the system being tested.)
//
// It is not uncommon for a decent-sized system to have many thousands of unit
// tests.
//
// With Jest, unit tests are written as JavaScript or TypeScript files that call
// "global" methods in the Jest library. However, rather than running Jest tests
// through Node.js, you execute the Jest framework. Because of this, you don't
// need to import the Jest module.
//
// When Jest is executed, it searches the project directory structure for files
// that contain test functions, loads them, and executes the test functions.
// Because Jest is executing the test code, the Jest library is already
// available. The test code is brought into the Jest environment (not the other
// way around.)
//
// Jest can be started in "watch" mode with the "--watch" or "--watchAll"
// command line parameter. (Note that the "--watch" parameter will detect which
// specific files have changed, using git, and will only re-run tests related
// to the files that have changed, while "--watchAll" will re-run ALL tests
// when ANY file is changed. Because of this, --watch can only be used with
// projects that are hosted in a git repo.
//
// Each file that contains one or more defined Jest tests is called a "suite".
//
// This suite is testing functionality found in ./car/car.js. Because of
// this, we need to import ./car/car.js, so we can call the functions we are
// testing.
//----------------------------------------------------------------------------//
const Car = require('./car');

//----------------------------------------------------------------------------//
// Jest provides a number of "global" functions.
//
// One of the global functions is "describe". The describe function allows you
// to create "blocks" of tests that are related, and provide a descriptive name
// or phrase to them. This is helpful, because if/when a test fails, the
// name of the descriptive block it is in is displayed along with the failure
// message. This makes it easy to track down failed tests (very handy when you
// have many thousands of them, possibly within a single suite). In addition, it
// provides a simple way to organize your tests. Describe blocks can be nested.
//----------------------------------------------------------------------------//

describe('Car class', () => {
  let car;

  // This callback is run before each individual test. This ensures that each
  // test gets a clean copy of the instance, without any "artifacts" left over
  // after previous tests have finished.
  //
  // In a similar way, you can run a method *after* each test, to tear down
  // any setup you had to do for the test (if necessary), etc.
  beforeEach(() => {
    car = new Car('toyota', 'prius');
  });

  it('can create a car instance', () => {
    expect(car).toBeInstanceOf(Car);
  });

  // A unit test consists of a descriptive name or phrase, a function
  // that contains the expectations to test, and an optional third
  // argument that specifies a timeout (the default timeout is 5 seconds,
  // and if the test is not completed in that time frame, it is aborted, and
  // considered to have failed).
  //
  // This test checks that the car instance has a "make" property.
  it('creates a car with a make property', () => {
    // Inside the test, the expect() global is used to "assert"
    // something about a value. Values can represent the return value of
    // a function, or a system "state" value that changes as the system
    // operates. A call to expect() is typically chained with a
    // call to a "matcher". The parameter to expect() generates or
    // contains the value to be tested, and the matcher tests it.
    //
    // There are many matchers. See https://jestjs.io/docs/en/expect.
    //
    expect(car).toHaveProperty('make');
  });

  // RED-GREEN-REFACTOR - this is the pattern for Test Driven Development
  // (aka TDD). In TDD, the tests for a section of functionality to be
  // tested are written *first*. When they are written, they are run, to
  // confirm that they fail. The tests are now RED.
  //
  // Then, just enough code is written to make the tests pass. When the
  // tests are passing, they are now GREEN.
  //
  // Once tests are passing, then the code can be modified to make it more
  // efficient, effective, performant, etc. This is known as REFACTORing
  // the code.
  it('creates a car with a model property', () => {
    expect(car).toHaveProperty('model');
  });

  it('creates a car with the make and model properties passed as arguments', () => {
    expect(car).toMatchObject({ make: 'toyota', model: 'prius' });
  });

  it('creates a car with an odometer property', () => {
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

    it('works multiple times', () => {
      expect(car.odometer).toBe(0);
      car.drive(4);
      expect(car.odometer).toBe(4);
      car.drive(4);
      expect(car.odometer).toBe(8);
    });

    it('works with multiple arguments', () => {
      expect(car.odometer).toBe(0);
      car.drive(5, 10, 21);
      expect(car.odometer).toBe(36);      
    });
  });

  describe('driveAsync()', () => {
    it('has a driveAsync method', () => {
      expect(car.driveAsync).toBeDefined();
      expect(car.driveAsync).toBeInstanceOf(Function);
      expect(car.driveAsync).toBe(Car.prototype.driveAsync);
    });

    // We can test asynchronous logic by simply making our test case
    // function asynchronous, and using "await" keyword inside the
    // function as needed.
    it('increases the odometer', async () => {
      expect(car.odometer).toBe(0);
      await car.driveAsync(5);
      expect(car.odometer).toBe(5);
    });

    it('works multiple times', async () => {
      expect(car.odometer).toBe(0);
      await car.driveAsync(4);
      expect(car.odometer).toBe(4);
      await car.driveAsync(4);
      expect(car.odometer).toBe(8);
    });

    // This is another syntax to test asynchronous logic. Instead of
    // using async/await, you can just return a Promise from the
    // test example function.
    it('works with multiple arguments', () => {
      expect(car.odometer).toBe(0);

      return car.driveAsync(5, 10, 21).then(() => {
        expect(car.odometer).toBe(36);
      });
    });
  });
});