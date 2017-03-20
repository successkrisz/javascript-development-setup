# JavaScript Development Setup

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

##

My JavaScript development setup, for modern JS Development

### Features:

 * Babel (ES6+)
 * Webpack 2 (Module bundling, Tree shaking and Lazy loading)
 * Sass
 * Development Server with HMR enabled
 * Mocha (Testing)
 * React
 * Enzyme for testing React components
 * ESLint && Standard code style

### Installation

Clone project:

```
$ git clone https://github.com/successkrisz/javascript-development-setup.git <my-project-name>
$ cd <my-project-name>
```

Install dependencies:

I recommend to use yarn:

```
yarn install
```

Or alternatively you can use:

```
npm install
```

Then start up the development server and start coding:

```
yarn dev
```

### How to use it

| `yarn <script>`|Description|
|-|-|
|`build`|Compile production build to `/dist`.|
|`dev`|Start development server at `<your-ip>:3000`|
|`test`|Runs tests in project with the `*.spec.js` extension.|
|`test:watch`|Runs tests in watch mode (re-run them on file changes.)|
|`lint`|Lint all `*.js` files|
|`lint:fix`|Lint and fix all `*.js` files|

### Happy hacking !!!
