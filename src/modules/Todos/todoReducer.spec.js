import reducer, {
  ADD_TODO,
  ARCHIVE_TODO,
  UPDATE_TODO_INPUT,
  addTodo,
  archiveTodo,
  handleInput,
  getTodos,
  getInputValue
} from './todoReducer'

describe('(Redux Module) Todo', () => {
  it('Should export a constant ADD_TODO.', () => {
    expect(ADD_TODO).to.equal('ADD_TODO')
  })

  it('Should export a constant ARCHIVE_TODO.', () => {
    expect(ARCHIVE_TODO).to.equal('ARCHIVE_TODO')
  })

  it('Should export a constant UPDATE_TODO_INPUT.', () => {
    expect(UPDATE_TODO_INPUT).to.equal('UPDATE_TODO_INPUT')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(reducer).to.be.a('function')
    })

    it('Should initialize with a state of { todos: [], input: \'\' }.', () => {
      const newState = reducer(undefined, {})
      expect(newState).to.eql({ todos: [], input: '' })
    })

    it('Should return the previous state if an action was not matched.', () => {
      const initialState = reducer(undefined, {})
      let state = reducer(initialState, { type: 'XXXXXXXX' })
      expect(state).to.eql(initialState)
      state = reducer(state, handleInput({ target: { value: 'XXX' } }))
      expect(state).to.eql({ ...state, input: 'XXX' })
      state = reducer(state, { type: 'XXXXXXXX' })
      expect(state).to.eql({ ...state, input: 'XXX' })
    })
  })

  describe('(Action Creator) handleInput', () => {
    const event = { target: { value: 'XXX' } }

    it('Should be exported as a function.', () => {
      expect(handleInput).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_TODO_INPUT".', () => {
      expect(handleInput(event)).to.have.property('type', UPDATE_TODO_INPUT)
    })

    it('Should assign event.target.value to the "value" property.', () => {
      expect(handleInput(event)).to.have.property('value', event.target.value)
    })
  })

  describe('(Action Creator) archiveTodo', () => {
    const id = 'id'

    it('Should be exported as a function.', () => {
      expect(archiveTodo).to.be.a('function')
    })

    it('Should return an action with type "ARCHIVE_TODO".', () => {
      expect(archiveTodo(id)).to.have.property('type', ARCHIVE_TODO)
    })

    it('Should assign first argument to the "id" property.', () => {
      expect(archiveTodo(id)).to.have.property('id', id)
    })
  })

  describe('(Action Creator) addTodo', () => {
    let state
    let dispatch
    let getState

    beforeEach(() => {
      state = {
        todoApp : reducer(undefined, {})
      }
      state.todoApp.input = 'some'
      dispatch = sinon.spy((action) => {
        state = {
          ...state,
          todoApp : reducer(state.counter, action)
        }
      })
      getState = sinon.spy(() => {
        return state
      })
    })

    it('Should be exported as a function.', () => {
      expect(addTodo).to.be.a('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(addTodo()).to.be.a('function')
    })

    it('Should call dispatch and getState exactly once.', () => {
      addTodo()(dispatch, getState)
      expect(dispatch.calledOnce).to.equal(true)
      expect(getState.calledOnce).to.equal(true)
    })

    it('Should dispatch an action with type "ADD_TODO".', () => {
      addTodo()(dispatch, getState)
      expect(dispatch.firstCall.args[0]).to.have.property('type', ADD_TODO)
    })

    it('Should dispatch an action with attaching the input value to "test".', () => {
      addTodo()(dispatch, getState)
      expect(dispatch.firstCall.args[0]).to.have.property('text', 'some')
    })
  })

  describe('(Selector) getTodos', () => {
    it('Should return Todos.', () => {
      const todo = { id: 'uuid', text: 'mytodo' }
      let state = reducer(undefined, {})
      state.todos.push(todo)
      const todos = getTodos(state)

      expect(todos).to.eql([todo])
    })
  })

  describe('(Selector) getInputValue', () => {
    it('Should return Input value.', () => {
      let state = reducer(undefined, {})
      state = { ...state, input: 'XXX' }
      const inputValue = getInputValue(state)

      expect(inputValue).to.equal('XXX')
    })
  })
})
