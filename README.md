Sweetener
=========

Inspired by Mike Bostock's [Towards Reusable Charts](https://bost.ocks.org/mike/chart/), this function makes it easy to add "syntactic sugar" for getting and setting properties on a function.

## Installation

On npm:

```
npm install sweetener
```

**Sweetener** can be run in a browser by including `sweetener.js`. It is available as a global (`sweetener`) or via AMD.

## Usage

Start with the function you wish to augment, and an object whose properties you wish to use:

```js
var sweetener = require('sweetener') // For node.js

function fn () {}
var object = { hello: 'world', foo: 'bar' }
```

Then call `sweetener` with the function and the object:

```js
sweetener(fn, object)
```

The object properties can now be accessed by called methods on the function that match the object key:

```js
fn.foo() // 'bar'
```

And they can be set by calling the method with a value:

```js
fn.foo('baz')
fn.foo() // 'baz'
```

Setters return the function itself and so can be chained:

```js
fn.hello('hello').foo('baz')
```

## Why?

In [Towards Reusable Charts](https://bost.ocks.org/mike/chart/), Mike Bostock advocates using nested functions like so:

```js
function constructor () {
  var width = 3
  var height = 2

  function chart () {
    console.log(width, height)
    // …
  }

  chart.width = function (_) {
    if (!arguments.length) return width
    width = _
    return chart
  }

  chart.height = function (_) {
    if (!arguments.length) return height
    height = _
    return chart
  }

  return chart
}

var chart = constructor()
chart() // render chart with a width: 3 and height: 2
chart.width(4).height(3)
chart() // render chart with a width: 4 and height: 3
```

Writing getters and setters for each variable can get cumbersome, so `sweetener` can do the work for you:

```js
function constructor () {
  var props = {
    width: 3,
    height: 2
  }

  return sweetener(function chart () {
    console.log(props.width, props.height)
    // …
  }, props)
}

var chart = constructor()
chart() // render chart with a width: 3 and height: 2
chart.width(4).height(3)
chart() // render chart with a width: 4 and height: 3
```

## License

Sweetener is copyright © 2016+ Dom Christie and released under the MIT license.
