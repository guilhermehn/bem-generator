export default class Modifiable {
  modifier(name) {
    return `${this.toString()}--${name}`
  }
}
