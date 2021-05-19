function foo() {
  return 5
}

// Test away!
describe('our first tests', () => {

  it('works', () => {

    expect(foo).toBeDefined() // assertion
    expect(foo).toBeTruthy() // another assertion
    expect(foo).toBe(5)      // should be related to the ONE thing
  })

  test('works some more', () => {

  })

})
