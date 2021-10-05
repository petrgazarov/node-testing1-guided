const { sum } = require('./math-helpers');

test('sum() adds up two numbers', () => {
  // compare expected with actual

  const x = 2;
  const y = 3;
  const expected = 5;
  const actual = sum(x, y);

  expect(actual).toBe(expected);
});