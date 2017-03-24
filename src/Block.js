const Modifiable = require('./Modifiable')
const Element = require('./Element')

module.exports = class Block extends Modifiable {
  constructor(name) {
    super()
    this.name = name
  }

  toString() {
    return this.name
  }

  element(name) {
    return new Element(name, this.name)
  }
}
