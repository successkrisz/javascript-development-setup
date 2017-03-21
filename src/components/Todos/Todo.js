import React, { PropTypes } from 'react'

import { todo as todoClass } from './Todos.css'

const Todo = ({ todo }) => (
  <div className={todoClass}>{todo.text}</div>
)

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default Todo
