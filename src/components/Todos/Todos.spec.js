import React from 'react'
import { shallow } from 'enzyme'

import Todos from './Todos'
import Todo from './Todo'

describe('(Component) Todos', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Todos />)
  })

  it('Should render a div', () => {
    expect(wrapper.is('div')).to.equal(true)
  })

  it('Should render a title "Todos"', () => {
    const title = wrapper.find('h1')

    expect(title.length).to.equal(1)
    expect(title.text()).to.equal('Todos')
  })

  it('Should render an input field with placeholder "Add Todo"', () => {
    const input = wrapper.find('input')

    expect(input.length).to.equal(1)
    expect(input.prop('placeholder')).to.equal('Add Todo')
  })

  it('Should render an "Add Todo" button', () => {
    const button = wrapper.find('button')

    expect(button.length).to.equal(1)
    expect(button.text()).to.equal('Add Todo')
  })

  it('Shouldn\'t do anything on button click when input is empty', () => {
    const button = wrapper.find('button')
    const numberOfDivsBefore = wrapper.find('div').length

    button.simulate('click')
    const numberOfDivsAfter = wrapper.find('div').length

    expect(numberOfDivsBefore).to.equal(numberOfDivsAfter)
  })

  it('Should render Todo when button is clicked and input has value', () => {
    const button = wrapper.find('button')

    wrapper.setState({ todos: [], input: 'mytodo' })
    button.simulate('click')

    const todos = wrapper.find(Todo)

    expect(todos.length).to.equal(1)
    expect(todos.prop('todo').text).to.equal('mytodo')
    expect(wrapper.state('input')).to.equal('')
  })
})
