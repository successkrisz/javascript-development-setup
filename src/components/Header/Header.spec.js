import React from 'react'
import { shallow } from 'enzyme'
import { NavLink } from 'react-router-dom'

import Header from './Header'

describe('(Component) Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('Should render a div.', () => {
    expect(wrapper.is('div')).to.equal(true)
  })

  it('Should render a <nav> element.', () => {
    expect(wrapper.find('nav').length).to.equal(1)
  })

  it('Should render 3 <NavLink> element.', () => {
    const navLinks = wrapper.find(NavLink)

    expect(navLinks.length).to.equal(3)
  })

  it('Should set .active as activeClassName an each link.', () => {
    const navLinks = wrapper.find(NavLink)
    const linksWithActiveClass = navLinks.filterWhere(a => a.prop('activeClassName') === 'active')

    expect(navLinks.length).to.equal(linksWithActiveClass.length)
  })

  it('Should render a Home link.', () => {
    const homeLink = wrapper.find(NavLink).filterWhere(a => a.prop('children') === 'Home')

    expect(homeLink.length).to.equal(1)
  })

  it('Should render a Counter link.', () => {
    const counterLink = wrapper.find(NavLink).filterWhere(a => a.prop('children') === 'Counter')

    expect(counterLink.length).to.equal(1)
  })

  it('Should render a Todos link.', () => {
    const todosLink = wrapper.find(NavLink).filterWhere(a => a.prop('children') === 'Todos')

    expect(todosLink.length).to.equal(1)
  })
})
