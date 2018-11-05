import React from 'react'
import { shallow } from 'enzyme'

import Todo from './Todo'

describe('(Component) Todo', () => {
  let wrapper, spy
  const todoProps = {
    id: 'id',
    text: 'Todo',
  }

  beforeEach(() => {
    spy = sinon.spy()
    wrapper = shallow(<Todo todo={todoProps} deleteTodo={spy} />)
  })

  it('Should render a div', () => {
    expect(wrapper.is('div')).to.equal(true)
  })

  it('Should render todo.text', () => {
    expect(wrapper.text()).to.equal(todoProps.text + 'X')
  })

  it('Should call deleteTodo(id) when delete is clicked', () => {
    const deleteBtn = wrapper.find('.deleteBtn')

    deleteBtn.simulate('click')

    expect(spy.calledOnce).to.equal(true)
    expect(spy).calledWith(todoProps.id)
  })

  it('Shouldn\'t call deleteTodo() on render', () => {
    expect(spy.called).to.equal(false)
  })
})
