# iniparser2 [![Build Status](https://travis-ci.org/jozefizso/iniparser2.svg?branch=master)](https://travis-ci.org/jozefizso/iniparser2)

> Parse INI configuration file in NodeJS.


## Install

```
$ npm install --save iniparser2
```


## Usage

```js
const iniparser2 = require('iniparser2');

iniparser2('config.ini').then(data => {
  console.log(data);
  //=> {key: "value"}
}
```


## API

### iniparser2(filepath)

Returns a promise that resolves to the parsed INI configuration file.


## License

Copyright (c) 2016 Jozef Izso. [MIT License](LICENSE)
