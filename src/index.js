const Block = require('./Block')
const Element = require('./Element')

function block(name) {
  return new Block(name)
}
exports.block = block

function element(name, block) {
  return new Element(name, block)
}
exports.element = element

module.exports = {
  block,
  element
}
