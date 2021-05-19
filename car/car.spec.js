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
    expect(5).toBe(5)      // should be related to the ONE thing
  })

  test('bar works', () => {
    expect(bar).toBeDefined() // assertion
    expect(bar).toBeTruthy() // another assertion
    expect({}).toBe({})
  })

})
