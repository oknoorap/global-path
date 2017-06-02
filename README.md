# :ghost: global-path
Set Global Path Elegantly. When you have directory structure with ugly nested depth it will bad for maintenance. Eureka, now you want to register your path globally.

Turn your code
```javascript
const dbinit = require('../../../helpers/db/init')
```

Into this code
```javascript
require('global-path')('helpers', '@/../../helpers/')

const dbinit = __helpers.require('db/init')
```

## Installation

```shell
$ npm install global-path --save

or

$ yarn add global-path
```

## Usage
You should register alias in your main file or in any file before require everything.
`@` symbol is an alias of `__dirname`. If you're use eslint you can call it via `global`.

```javascript
// index.js
require('global-path')('config', '@/src/config/')
__config.require('myconfig')

// bin/cli with no prefix
require('global-path')('utils', '@/../src/utils')
console.log(utils.path, global.utils.path) // Print path
utils.require('string')
```

## Params
`globalPath (alias: string, path: string, prefix?: string)`

## License
MIT © [oknoorap](https://github.com/oknoorap)
