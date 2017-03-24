# bem-generator
> Utility for working with BEM convention (works better with React)

## Install
```bash
npm i --save bem-generator
```

## Usage
```js
// App.js
import React from 'react'
import { render } from 'react-dom'
import { block } from 'bem-generator'

const App = () => {
  let header = block('header')
  let nav = block('nav')
  let link = nav.element('link')
  let footer = block('footer')

  return (
    <div>
      <header className={ header } >
        <h1 className={ header.element('title') }>My App</h1>
      </header>
      <nav className={ nav }>
        <ul>
          <li className={ link.modifier('active') }>Home</li>
          <li className={ link }>About</li>
        </ul>
      </nav>
      <footer className={ footer }>
        <p className={ footer.element('copy') }>Copyright</p>
      </footer>
    </div>
  )
}

render(<App />, document.body)
```

You can create a element and give it a block:

```js
import { block, element } from 'bem-generator'

let b = block('foo')
let el = element('bar', b)

el.toString()
// -> 'foo__bar'

el.modifier('red').toString()
// -> 'foo__bar foo__bar--red'
```

Modifiers accepts more than one modifier:

```js
import { block, element } from 'bem-generator'

let b = block('foo')

el.modifier('large', 'red').toString()
// -> 'foo foo--large foo--red'
```

## License
MIT
