import React from 'react'
import { shallow } from 'enzyme'
import { Route, Switch } from 'react-router-dom'

import Routes from '../src/routes'

describe('(Component) Routes', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Routes />)
  })

  it('Should render routes to a Switch component.', () => {
    expect(wrapper.is(Switch)).to.equal(true)
  })

  it('Should render 4 Route component.', () => {
    const routes = wrapper.find(Route)

    expect(routes.length).to.equal(4)
  })

  it('Should render a Home Route at "/".', () => {
    const route = wrapper.find(Route).filterWhere(route => route.prop('path') === '/')

    expect(route.length).to.equal(1)
  })

  it('Should render a Counter Route at "/counter".', () => {
    const route = wrapper.find(Route).filterWhere(route => route.prop('path') === '/counter')

    expect(route.length).to.equal(1)
  })

  it('Should render a Todos Route at "/todos".', () => {
    const route = wrapper.find(Route).filterWhere(route => route.prop('path') === '/todos')

    expect(route.length).to.equal(1)
  })
})
