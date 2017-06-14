(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global.OnMount = factory(global.React));
}(this, (function (React) { 'use strict';

React = React && 'default' in React ? React['default'] : React;

var before = curry2(function(fn, Component) {
  return function(props) {
    var component = new React.Component(props);
    component.componentDidMount = function () {
      fn(props);
    };
    component.render = function() {
      return React.createElement( Component, props)
    };
    return component
  }
});

function curry2(fn) {
  return function() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.length === 2 ? fn.apply(void 0, args) : function (n2) { return fn(args[0], n2); }
  }
}

return before;

})));
