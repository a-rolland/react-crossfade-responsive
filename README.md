# react-crossfade-responsive

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-crossfade-responsive.svg)](https://www.npmjs.com/package/react-crossfade-responsive) [![React](https://img.shields.io/badge/react-v.16.8-blue.svg)](https://reactjs.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Works with React v16.8 and above.

<br />

Please read before using. This is my first publication of a React Component of NPM so it may not be perfect.

This is a very easy-to-use crossfade carousel. I created this one because I experienced in most of the cases issues when using the other ones. (Some of them makes white blinks during the transitions, especially on Safari browsers).

It was built with React functional components & React Hooks.

<br />

## Install

```bash

npm install --save react-crossfade-responsive

```

<br />

## Usage

```jsx

import  Crossfade  from  'react-crossfade-responsive'

const  App = () => {

return  <Crossfade  images=[<arrayOfImages>]  />

}

export  default  App

```

To use it, just provide an array of images to the component and pass it as a prop called "images". By default it has 3 random images so you can try instantly.

<br />

You can set a specific **width** and **height** by setting these props :

```jsx
<Crossfade images={yourArray} height='300px' width='900px' />
```

_In the case that you use specific dimensions, it's better to place the component inside a container with a **margin: 0 auto;** (for example) in order to justify it in the center._

<br />

You can also set a specific **horizontal rate** and **vertical rate** by setting these props :

```jsx
<Crossfade images={yourArray} xRate='90%' yRate='90%' />
```

Theses rate allow you to control in percentage the span of the component.

<br />

By default, all these props are in order to provide a perfect full screen crossfade carousel.

The component is set as **_position: relative_**, so you can put it inside custom container to adjust it.

<br />

It is 100% responsive and will adapt to any height/width.

You can customize the **interval** and the **transition duration** setting the interval and transition props:

```jsx
<Crossfade images={yourArray} interval='4000' transition='2000' />
```

_(1000 = 1 second)_

By default, interval set on 5000 and transition is set on 3000.

<br />

## Demo

You can see an example of this crossfade by visiting this page >> [demo page](https://a-rolland.github.io/react-crossfade-responsive/)

<br />

## API

| Name       | Required | Type   | Default             |
| ---------- | -------- | ------ | ------------------- |
| images     | no       | array  | [<3 random images>] |
| height     | no       | string | 97vh                |
| width      | no       | string | 100%                |
| yRate      | no       | string | 100%                |
| xRate      | no       | string | 100%                |
| interval   | no       | string | 5000                |
| transition | no       | string | 3000                |

<br />

## Repo

See the repo: [Github page](https://github.com/a-rolland/react-crossfade-responsive)

<br />

## License

MIT © [a-rolland](https://github.com/a-rolland)

<br />
