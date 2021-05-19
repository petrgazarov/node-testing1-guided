function foo() {
  return 5
}
function bar() {
  return {}
}

// Test away!
describe('our first tests', () => {

  it('foo returns five', () => {
    expect(foo).toBeDefined() // assertion
    expect(foo).toBeTruthy() // another assertion
    expect(foo()).toBe(5)      // should be related to the ONE thing
  })

  test('bar works', () => {
    expect(bar).not.toBeDefined() // assertion
    expect(bar).not.toBeTruthy() // another assertion
  })

})
