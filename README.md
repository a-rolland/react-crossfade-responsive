# react-crossfade-responsive

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-crossfade-responsive.svg)](https://www.npmjs.com/package/react-crossfade-responsive) [![React](https://img.shields.io/badge/react-v.16.8-blue.svg)](https://reactjs.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Works with React v16.8 and above.

Please read before using. This is my first publication of a React Component of NPM so it may not be perfect.

This is a very easy-to-use crossfade carousel. I created this one because I experienced in most of the cases issues when using the other ones. (Some of them makes white blinks during the transitions, especially on Safari browsers).

It was built with React functional components & React Hooks.

## Install

```bash

npm install --save react-crossfade-responsive

```

## Usage

```jsx

import  Crossfade  from  'react-crossfade-responsive'

const  App = () => {
	return  <Crossfade  images=[<arrayOfImages>]  />
}

export  default  App

```

To use it, just provide an array of images to the component and pass it as a prop called "images". By default it has 3 random images so you can try instantly.

You can set a specific **width** and **height** by setting props :

```jsx
<Crossfade images={yourArray} height='300px' width='900px' />
```

By default, it is set as in order to provide a perfect full screen crossfade carousel.

It is set as **_position: relative_**. So you can put it inside custom container to adjust it.

It is 100% responsive and will adapt to any height/width.

You can customize the interval setting the **interval** prop:

You can customize the transition setting the **transition** prop:

```jsx
<Crossfade images={testImages} interval={4000} transition={2000} />
```

(1000 = 1 second).

By default, interval set on 5000 and transition is set on 3000.

## Demo

To can see an example of this crossfade by visiting this page >> [demo page](https://a-rolland.github.io/react-crossfade-responsive/)

## API

| Name       | Required | Type   | Default             |
| ---------- | -------- | ------ | ------------------- |
| images     | no       | array  | [<3 random images>] |
| height     | no       | string | 97vh                |
| width      | no       | string | 100%                |
| interval   | no       | string | 5000                |
| transition | no       | string | 3000                |

## Repo

See the repo: [Github](https://github.com/a-rolland/react-crossfade-responsive)

## License

MIT © [a-rolland](https://github.com/a-rolland)
