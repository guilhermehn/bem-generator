import { expect } from 'chai'
import { block } from '../src'

describe('{block,element}.modifier(`string`)', () => {
  it('should output a full BEM class string', () => {
    const b = block('block')
    const e = b.element('element')
    const m = e.modifier('modifier')
    expect(m).to.equals('block__element block__element--modifier')
  })
})
