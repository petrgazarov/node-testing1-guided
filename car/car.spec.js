function foo() {
  return 5
}
function bar() {
  return {}
}

// Test away!
describe('our first tests', () => {

  it('foo works', () => {
    expect(foo).toBeDefined() // assertion
    expect(foo).toBeTruthy() // another assertion
    expect(foo()).toBe(5)      // should be related to the ONE thing
  })

  test('works some more', () => {

  })

})
