import Modifiable from './Modifiable'
import Element from './Element'

export default class Block extends Modifiable {
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
