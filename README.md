# React On Mount

React On Mount is a higher order component that provides the ability to
wrap a component and pass in a function handler for the componentDidMount lifecycle
method.

## Why

To try to remove the need for stateful components in applications, the only reason
I need a stateful react component is when I need to access the componentDidMount
lifecycle method, so React On Mount is a higher order function that lets you
access the props during mount and use them to perform async actions and dispatch
the results to redux.

## Install

`npm install react-on-mount`

## Example

```js
import onMount from 'react-on-mount'

const ShowWidget = props => {
  return (
    <div>
      <h1>{props.widget.name}</h1>
      <a href={`/widgets/${props.widget.id}/edit`}>Edit Widget</a>
    </div>
  )
}

const wrapper = onMount(props => {
  props.dispatch(
    fetch(`/api/widgets/${props.params.id}`).then(res => res.json())  
  )
})

export default wrapper(ShowWidget)
