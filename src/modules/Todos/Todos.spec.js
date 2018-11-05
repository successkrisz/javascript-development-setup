import React from 'react'
import { shallow } from 'enzyme'

import { Todos } from './Todos'
import Todo from './Todo'

describe('(Component) Todos', () => {
  let wrapper, props, handleInput, addTodo, archiveTodo

  beforeEach(() => {
    handleInput = sinon.spy()
    addTodo = sinon.spy()
    archiveTodo = sinon.spy()
    props = {
      todos: [],
      input: '',
      handleInput,
      addTodo,
      archiveTodo,
    }
    wrapper = shallow(<Todos {...props} />)
  })

  it('Should render a div.', () => {
    expect(wrapper.is('div')).to.equal(true)
  })

  it('Should render a title "Todos".', () => {
    const title = wrapper.find('h1')

    expect(title.length).to.equal(1)
    expect(title.text()).to.equal('Todos')
  })

  it('Should render an input field with placeholder "Add Todo".', () => {
    const input = wrapper.find('input')

    expect(input.length).to.equal(1)
    expect(input.prop('placeholder')).to.equal('Add Todo')
  })

  it('Should render an "Add Todo" button.', () => {
    const button = wrapper.find('button')

    expect(button.length).to.equal(1)
    expect(button.text()).to.equal('Add Todo')
  })

  it('Should render a Todo Component for each todo.', () => {
    const propsWithTodos = { ...props, todos: [{ id: 'id', text: 'Todo' }] }

    wrapper = shallow(<Todos {...propsWithTodos} />)
    const todos = wrapper.find(Todo)

    expect(todos.length).to.equal(1)
  })

  it('Should call props.addTodo() when button is clicked.', () => {
    const propsWithInput = { ...props, input: 'value' }
    wrapper = shallow(<Todos {...propsWithInput} />)
    const button = wrapper.find('button')

    button.simulate('click')

    expect(addTodo.calledOnce).to.equal(true)
  })
})
