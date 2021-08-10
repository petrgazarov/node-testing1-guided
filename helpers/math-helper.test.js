const { sum } = require('./math-helper');

describe('sum', () => {
  it('adds positive numbers', () => {
    expect(sum(1, 2)).toEqual({ result: 3 });
  });

  it('works with negative numbers', () => {
    expect(sum(-2, 2)).toEqual({ result: 0 });
  });
});