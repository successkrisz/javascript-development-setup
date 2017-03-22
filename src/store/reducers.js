import { combineReducers } from 'redux'

import * as fromTodos from '../modules/Todos'

const reducers = combineReducers({
  todoApp: fromTodos.todoReducer
})

export default reducers

// Selectors
export const getTodos = state => fromTodos.getTodos(state.todoApp)
export const getInputValue = state => fromTodos.getInputValue(state.todoApp)
