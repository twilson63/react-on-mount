import React from 'react'

const onMount = curry2(function(fn, Component) {
  return function(props) {
    const component = new React.Component(props)
    component.componentDidMount = () => {
      fn(props)
    }
    component.render = function() {
      return <Component {...props} />
    }
    return component
  }
})

function curry2(fn) {
  return function(...args) {
    return args.length === 2 ? fn(...args) : n2 => fn(args[0], n2)
  }
}

export default onMount
