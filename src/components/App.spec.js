import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('(Component) App', () => {
  it('Should render a div', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.is('div')).to.equal(true)
  })

  it('Should render Hello World without props', () => {
    const wrapper = shallow(<App />)
    const h1 = wrapper.find('h1')

    expect(h1.text()).to.equal('Hello World!')
  })

  it('Should render Hello {name} with props', () => {
    const name = 'Joe'
    const wrapper = shallow(<App name={name} />)
    const h1 = wrapper.find('h1')

    expect(h1.text()).to.equal(`Hello ${name}!`)
  })
})
