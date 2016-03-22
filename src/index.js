import Block from './Block'
import Element from './Element'

export function block(name) {
  return new Block(name)
}

export function element(name, block) {
  return new Element(name, block)
}
