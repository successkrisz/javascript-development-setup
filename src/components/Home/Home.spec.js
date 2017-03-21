import React from 'react'
import { shallow } from 'enzyme'

import Home from './Home'

describe('(Component) Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('Should render a div', () => {
    expect(wrapper.is('div')).to.equal(true)
  })

  it('Should render a title "Home"', () => {
    const title = wrapper.find('h1')

    expect(title.length).to.equal(1)
    expect(title.text()).to.equal('Home')
  })

  it('Should render an image', () => {
    const image = wrapper.find('img')

    expect(image.length).to.equal(1)
  })
})
