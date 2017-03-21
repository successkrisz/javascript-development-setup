import React, { Component } from 'react'

import { button, counter } from './Counter.css'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0 }
    this.increment = this.increment.bind(this)
    this.double = this.double.bind(this)
  }

  increment () {
    this.setState(({ counter }) => ({ counter: counter + 1 }))
  }

  double () {
    this.setState(({ counter }) => ({ counter: counter * 2 }))
  }

  render () {
    return (
      <div>
        <h1>Counter</h1>
        <div className={counter}>{this.state.counter}</div>
        <button onClick={this.increment} className={button}>Increment</button>
        <button onClick={this.double} className={button}>Double</button>
      </div>
    )
  }
}

export default Counter
