import uuid from 'node-uuid'

// Constants
export const ADD_TODO = 'ADD_TODO'
export const ARCHIVE_TODO = 'ARCHIVE_TODO'
export const UPDATE_TODO_INPUT = 'UPDATE_TODO_INPUT'

// Actions
export const addTodo = () => (dispatch, getState) => {
  const { input } = getState().todoApp
  if (!input) return
  dispatch({
    type: ADD_TODO,
    id: uuid.v4(),
    text: input
  })
}

export const archiveTodo = id => ({
  type: ARCHIVE_TODO,
  id
})

export const handleInput = event => ({
  type: UPDATE_TODO_INPUT,
  value: event.target.value
})

// Action Handlers
const ACTION_HANDLERS = {
  [ADD_TODO]: (state, action) => (
    { ...state, input: '', todos: [ ...state.todos, { id: action.id, text: action.text } ] }),
  [ARCHIVE_TODO]: (state, action) => ({ ...state, todos: [ ...state.todos.filter(todo => todo.id !== action.id) ] }),
  [UPDATE_TODO_INPUT]: (state, action) => ({ ...state, input: action.value })
}
// Reducer
const initialState = {
  todos: [],
  input: ''
}
export default function todoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return (handler) ? handler(state, action) : state
}

// Selectors
export const getTodos = state => ([ ...state.todos ])
export const getInputValue = state => state.input
