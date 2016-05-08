import { expect } from 'chai'
import { block, element } from '../src'

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
})
