function foo() {
  return 5
}
function bar() {
  return {}
}

describe('Car class', () => {
  it('exits', () => {
    
  })
})

describe('our first tests', () => {
  it('foo returns five', () => {
    expect(foo).toBeDefined() // assertion
    expect(foo).toBeTruthy()  // another assertion
    expect(foo()).toBe(5)     // should be related to the ONE thing
  })
  test('bar works', () => {
    expect(bar).toBeDefined()
    expect(bar).toBeTruthy()
    expect(bar()).not.toBe({}) // only if truly same object passes
    expect(bar()).toEqual({})  // keys and values the same
    expect(bar()).toMatchObject({})
  })
})
