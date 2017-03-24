module.exports = class Modifiable {
  modifier(...names) {
    const className = this.toString()
    const modifiers = names.map(mod => `${className}--${mod}`)

    return `${className} ${modifiers.join(' ')}`
  }
}
