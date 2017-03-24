const { expect } = require('chai')
const { block, element } = require('../')

describe('element(`string`)', () => {
  it('should return a object instance', () => {
    expect(element('element')).to.be.a('object')
  })

  it('should generate a css class string', () => {
    expect(element('element').toString()).to.equals('element')
  })

  it('should work with ES2015 template syntax', () => {
    expect(`${ element('element') }`).to.equals('element')
  })

  it('should accept a `block` parameter', () => {
    let b = block('block')
    let el = element('element', b)

    expect(el.toString()).to.equals('block__element')
  })

  it('should be able to be modified via `.modifier(´string´)`', () => {
    const e = element('element')
    const m = e.modifier('modifier')
    expect(m).to.equals('element element--modifier')
  })

  it('should be able to be modified via `.modifier(´array´)`', () => {
    const e = element('element')
    const m = e.modifier('modifier1', 'modifier2')
    expect(m).to.equals('element element--modifier1 element--modifier2')
  })
})
