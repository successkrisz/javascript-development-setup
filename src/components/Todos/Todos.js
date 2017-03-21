import React, { Component } from 'react'
import uuid from 'node-uuid'

import Todo from './Todo'
import { button, input } from './Todos.css'

class Todos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      input: ''
    }
  }

  handleInputChange = event => {
    const value = event.target.value

    event.preventDefault()
    this.setState(state => ({ ...state, input: value }))
  }

  handleAddTodo = () => {
    if (this.state.input === '') return

    const newTodo = {
      id: uuid.v4(),
      text: this.state.input
    }

    this.setState(state => ({
      todos: [ ...state.todos, newTodo ],
      input: ''
    }))
  }

  fireAddTodoIfEnterPressed = event => {
    if (event.keyCode === 13) {
      this.handleAddTodo()
    }
  }

  deleteTodo = id => {
    this.setState(state => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }

  render () {
    return (
      <div>
        <h1>Todos</h1>
        <div>
          <input
            onChange={this.handleInputChange}
            onKeyUp={this.fireAddTodoIfEnterPressed}
            placeholder='Add Todo'
            value={this.state.input}
            className={input}
          />
          <button onClick={this.handleAddTodo} className={button}>Add Todo</button>
        </div>
        <div>
          { this.state.todos.map(todo => (
            <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo} />
          )) }
        </div>
      </div>
    )
  }
}

export default Todos
