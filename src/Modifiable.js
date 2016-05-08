export default class Modifiable {
  modifier(name) {
    const className = this.toString()
    return `${className} ${className}--${name}`
  }
}
