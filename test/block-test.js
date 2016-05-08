import { expect } from 'chai'
import { block } from '../src'

describe('block(`string`)', () => {
  it('should return a Block class instance', () => {
    expect(block('block')).to.be.a('object')
  })

  it('should generate a css class string', () => {
    expect(block('block').toString()).to.equals('block')
  })

  it('should work with ES2015 template syntax', () => {
    expect(`${ block('block') }`).to.equals('block')
  })

  it('should have a `element` method', () => {
    expect(block('block').element).to.be.a('function')
  })

  it('should be able to be modified via `.modifier(´string´)`', () => {
    const myBlock = block('block')
    expect(myBlock.modifier('modifier')).to.equals('block block--modifier')
  })

  it('should be able to be modified via `.modifier(´array´)`', () => {
    const b = block('block')
    const m = b.modifier(['modifier1', 'modifier2'])
    expect(m).to.equals('block block--modifier1 block--modifier2')
  })
})
