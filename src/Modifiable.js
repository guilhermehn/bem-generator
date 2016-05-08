export default class Modifiable {
  modifier(name, cx) {
    var className

    if (typeof cx === 'string') {
      className = cx
    }
    else {
      className = this.toString()
    }

    if (typeof name === 'string') {
      return `${className} ${className}--${name}`
    }

    const modifiers = name.map(mod => `${className}--${mod}`)

    return `${className} ${modifiers.join(' ')}`
  }
}
