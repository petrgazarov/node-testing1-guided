const { sum } = require('./math-helpers');

describe('sum()', () => { // test group
  it('adds up two positive numbers', () => { // test (test case, test example)
    expect(sum(2, 3)).toBe(5); // assertion
  });
  
  it('adds up two numbers: one negative and one positive', () => {
    expect(sum(-2, 3)).toBe(1);
  });
  
  it('adds up two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});

describe('divide()', () => {
  it.skip('divides positive numbers', () => {

  });

  it.skip('divides a positive number by a negative number', () => {

  });

  it.skip('divides a negative number by a positive number', () => {

  });

  it.skip('divides negative numbers', () => {

  });
});