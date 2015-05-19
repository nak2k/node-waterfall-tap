module.exports = tap;

function tap(fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var next = args.pop();

    fn.apply(null, args)

    args.unshift(null);

    next.apply(null, args);
  }
}
