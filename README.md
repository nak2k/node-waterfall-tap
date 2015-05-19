# waterfall-tap

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
