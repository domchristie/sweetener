/*
 * Sweetener
 * Copyright © 2016+ Dom Christie
 * Released under the MIT license
 */

/* global define */

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : (global.sweetener = factory())
}(this, function () {
  'use strict'

  return function sweetener (fn, object) {
    for (var key in object) fn[key] = functionForKey(key)
    return fn

    function functionForKey (key) {
      return function (value) {
        if (!arguments.length) return object[key]
        object[key] = value
        return fn
      }
    }
  }
}))

