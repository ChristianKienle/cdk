// @ts-check
import createSelection from './../single'

describe('single selection mode', () => {
  it('adds to empty selection', () => {
    expect(createSelection({ selection: [], affected: '1' })).toStrictEqual(['1'])
  })

  it('adds only a single id to empty selection', () => {
    expect(createSelection({ selection: [], affected: '1' })).toHaveLength(1)
  })

  it('removes alreay present id', () => {
    expect(createSelection({ selection: ['5'], affected: '5' })).toHaveLength(0)
  })

  it('repairs multiple selection', () => {
    expect(createSelection({ selection: ['5', '6', '7'] })).toHaveLength(1)
  })

  it('repairs empty selection', () => {
    expect(createSelection({ selection: [] })).toHaveLength(0)
  })

  it('repairs single selection', () => {
    expect(createSelection({ selection: ['1'] })).toHaveLength(1)
  })

  it('adds new selection and returns repaired selection', () => {
    expect(createSelection({ selection: ['5', '6'], affected: '1' })).toEqual(['1'])
  })
})
