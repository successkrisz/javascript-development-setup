import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { addTodo, archiveTodo, handleInput } from './todoReducer'
import Todo from './Todo'
import { button, input } from './Todos.css'

export const Todos = ({ todos, inputField, addTodo, archiveTodo, handleInput }) => {
  const fireAddTodoIfEnterPressed = event => {
    if (event.keyCode === 13) {
      addTodo()
    }
  }

  return (
    <div>
      <h1>Todos</h1>
      <div>
        <input
          onChange={handleInput}
          onKeyUp={fireAddTodoIfEnterPressed}
          placeholder='Add Todo'
          value={inputField}
          className={input}
        />
        <button onClick={addTodo} className={button}>Add Todo</button>
      </div>
      <div>
        { todos.map(todo => (
          <Todo key={todo.id} todo={todo} deleteTodo={archiveTodo} />
        )) }
      </div>
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  inputField: PropTypes.string,
  addTodo: PropTypes.func.isRequired,
  archiveTodo: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todoApp.todos,
  inputField: state.todoApp.input,
})

const mapDispatchToProps = {
  addTodo,
  archiveTodo,
  handleInput,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
