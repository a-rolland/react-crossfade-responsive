# react-crossfade-responsive

> Made with create-react-library

/!\ Work in progress /!\
//!\ Has dependecies issues for the moment //!\

This is a very easy-to-use crossfade carousel. I created this one because I experiences in most of the cases issues when using the other ones. (Some of them makes white blinks during the transitions).

[![NPM](https://img.shields.io/npm/v/react-crossfade-responsive.svg)](https://www.npmjs.com/package/react-crossfade-responsive) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-crossfade-responsive
```

## Usage

To use it, just provide an array of images to the component and pass it as a prop called "images".

It is 100% responsive.

## Example

To can see an example of this crossfade by visiting this page: [see it in action](https://a-rolland.github.io/react-crossfade-responsive/)


```jsx
import React from 'react'
import Crossfade from 'react-crossfade-responsive'
import 'react-crossfade-responsive/dist/index.css'

const App = () => {
  return <Crossfade images={testImages} />
}

export default App
```

You can customize the interval setting the customInterval prop:

```jsx
<Crossfade images={testImages} customInterval={2000} />
```

1000 = 1 sec.

By default, it is set on 5000.

## License

MIT © [a-rolland](https://github.com/a-rolland)
