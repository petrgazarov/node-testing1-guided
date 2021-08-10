const { sum } = require('./math-helper');

describe('sum', () => {
  it('adds positive numbers', () => {
    // 1. Call the function
    // 2. Compare the result with an expected value

    expect(sum(1, 2)).toEqual(4);
  });

  it.skip('works with negative numbers', () => {

  });
});