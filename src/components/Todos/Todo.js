import React, { PropTypes } from 'react'

import { deleteBtn, todo as todoClass } from './Todos.css'

const Todo = ({ todo, deleteTodo }) => {
  const deleteThis = () => deleteTodo(todo.id)

  return (
    <div className={todoClass}>{todo.text}
      <div className={deleteBtn} onClick={deleteThis}><div>X</div></div>
    </div>
  )
}

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
}

export default Todo
