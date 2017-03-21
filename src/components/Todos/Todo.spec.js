import React from 'react'
import { shallow } from 'enzyme'

import Todo from './Todo'

describe('(Component) Todo', () => {
  let wrapper
  const todoProps = {
    id: 'id',
    text: 'Todo'
  }

  beforeEach(() => {
    wrapper = shallow(<Todo todo={todoProps} />)
  })

  it('Should render a div', () => {
    expect(wrapper.is('div')).to.equal(true)
  })

  it('Should render todo.text', () => {
    expect(wrapper.text()).to.equal(todoProps.text)
  })
})
