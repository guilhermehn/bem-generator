const Modifiable = require('./Modifiable')

module.exports = class Element extends Modifiable {
  constructor(name, block) {
    super()
    this.name = name
    this.block = block
  }

  toString() {
    if (typeof this.block !== 'undefined') {
      return `${this.block}__${this.name}`
    }
    else {
      return `${this.name}`
    }
  }
}
