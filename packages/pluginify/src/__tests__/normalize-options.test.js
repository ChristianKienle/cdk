import normalize from './../normalize-options'

describe('normalize-options', () => {
  it('accepts undefined', () => {
    const normalized = normalize()
    expect(normalized).toBeDefined()
    expect(typeof normalized).toEqual('object')
    expect(normalized.onDidRegisterComponent).toBeDefined()
    expect(typeof normalized.onDidRegisterComponent).toEqual('function')
  })

  it('accepts empty object', () => {
    const normalized = normalize({})
    expect(normalized).toBeDefined()
    expect(typeof normalized).toEqual('object')
    expect(normalized.onDidRegisterComponent).toBeDefined()
    expect(typeof normalized.onDidRegisterComponent).toEqual('function')
  })

  it('accepts with onDidRegisterComponent', () => {
    const onDidRegisterComponent = () => {}
    const normalized = normalize({ onDidRegisterComponent })
    expect(normalized).toBeDefined()
    expect(typeof normalized).toEqual('object')
    expect(normalized.onDidRegisterComponent).toStrictEqual(onDidRegisterComponent)
  })
})
