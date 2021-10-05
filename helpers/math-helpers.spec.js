const { sum } = require('./math-helpers');

describe('sum()', () => {
  it('adds up two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
  
  it('adds up two numbers: one negative and one positive', () => {
    expect(sum(-2, 3)).toBe(1);
  });
  
  it('adds up two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});