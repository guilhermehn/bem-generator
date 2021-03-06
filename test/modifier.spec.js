const { expect } = require('chai')
const { block, element } = require('../')

describe('{block,element}.modifier(string|array[, block|element])', () => {
  it('should output a full BEM class string', () => {
    const b = block('block')
    const e = b.element('element')
    const m = e.modifier('modifier')
    expect(m).to.equals('block__element block__element--modifier')
  })

  it('should accept an array of modifier names', () => {
    const b = block('block')
    expect(b.modifier('large', 'red')).to.equals('block block--large block--red')
  })

  it('should work with ES2015 template syntax', () => {
    const b = block('block')
    const e = element('element')

    expect(`${b.modifier('modifier')}`).to.equals('block block--modifier')
    expect(`${e.modifier('modifier')}`).to.equals('element element--modifier')
  })
})
