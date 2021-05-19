const Car = require('./car')

function foo() {
  return 5
}
function bar() {
  return {}
}

describe('Car class', () => {
  let celica
  beforeEach(() => {
    celica = new Car('toyota', 'celica')
  })
  it('exists', () => {
    expect(Car).toBeDefined()
  })
  it('Car can create a car instance', () => {
    expect(celica).toBeInstanceOf(Car)
  })
  it('creates cars with a model property', () => {
    expect(celica).toHaveProperty('model', 'celica')
  })
  it('creates cars with a make property', () => {
    expect(celica).toHaveProperty('make', 'toyota')
  })
  it('creates cars with make and model', () => {
    expect(celica).toMatchObject({ make: 'toyota', model: 'celica' })
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
