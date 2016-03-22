import { expect } from 'chai'
import { block, element } from '../src'

describe('bemGenerator module', () => {
  describe('block(`string`)', () => {
    it('should return a object instance', () => {
      expect(block('block')).to.be.a('object')
    })

    it('should generate a css class string', () => {
      expect(block('block').toString()).to.equals('block')
    })

    it('should have a `element` method', () => {
      expect(block('block').element).to.be.a('function')
    })

    it('should be able to be modified via `.modifier(´string´)`', () => {
      expect(block('block').modifier('modifier')).to.equals('block--modifier')
    })
  })

  describe('element(`string`)', () => {
    it('should return a object instance', () => {
      expect(element('element')).to.be.a('object')
    })

    it('should generate a css class string', () => {
      expect(element('element').toString()).to.equals('element')
    })

    it('should accpet a `block` parameter', () => {
      let b = block('block')
      let el = element('element', b)

      expect(el.toString()).to.equals('block__element')
    })

    it('should be able to be modified via `.modifier(´string´)`', () => {
      expect(element('element').modifier('modifier')).to.equals('element--modifier')
    })
  })
})
