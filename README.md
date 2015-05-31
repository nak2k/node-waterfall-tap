# waterfall-tap [![Build Status][travis-image]][travis-url]

Tap for `async.waterfall`.

## Usage

```
var tap = require('waterfall-tap');
var async = require('async');

async.waterfall([
  function(callback) {
    callback(null, 1, 2, 3);
  },
  tap(function(x, y, z) {
    console.log(x, y, z);
  }),
], callback);

```

## License

MIT

[travis-url]: https://travis-ci.org/nak2k/node-gulp-import
[travis-image]: https://travis-ci.org/nak2k/node-gulp-import.svg?branch=master
