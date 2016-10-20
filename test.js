var test = require('tape').test
var sweetener = require('./')

var fn
var object

function reset () {
  fn = function fn () {}
  object = { foo: 'bar' }
}

reset()

test('return value', function (t) {
  t.plan(1)
  reset()
  t.equal(sweetener(fn, object), fn)
})

test('getter', function (t) {
  t.plan(1)
  reset()
  t.equal(sweetener(fn, object).foo(), 'bar')
})

test('setter', function (t) {
  t.plan(1)
  reset()
  sweetener(fn, object).foo('baz')
  t.equal(object.foo, 'baz')
})
