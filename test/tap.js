var test = require('tape');
var tap = require('..');
var async = require('async');

test('tap', function (t) {
  t.plan(8);

  async.waterfall([
    function(callback) {
      callback(null, 1, 2, 3);
    },
    tap(function(x, y, z) {
      t.equal(arguments.length, 3);
      t.equal(x, 1);
      t.equal(y, 2);
      t.equal(z, 3);
    }),
  ], function(err, x, y, z) {
    t.equal(arguments.length, 4);
      t.equal(x, 1);
      t.equal(y, 2);
      t.equal(z, 3);
  });
});
