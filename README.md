# react-crossfade-carousel

> Made with create-react-library

This is a 

[![NPM](https://img.shields.io/npm/v/react-crossfade-carousel.svg)](https://www.npmjs.com/package/react-crossfade-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-crossfade-carousel
```

## Usage

To use it, just provide an array of images and pass it as a props to the Crossfade component.

This crossfade carousel is 100% responsive.

You can customize the interval setting the customInterval prop: customInterval={2000}, 1000 = 1 sec. By default, it is set on 5000.


```jsx
import React from 'react'
import Crossfade from 'react-crossfade-carousel'
import 'react-crossfade-carousel/dist/index.css'

const App = () => {
  return <Crossfade images={testImages} />
}

export default App
```

## License

MIT © [a-rolland](https://github.com/a-rolland)
