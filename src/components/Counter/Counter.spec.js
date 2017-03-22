import React from 'react'
import { shallow } from 'enzyme'

import Counter from './Counter'

describe('(Component) Counter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Counter />)
  })

  it('Should render a div.', () => {
    expect(wrapper.is('div')).to.equal(true)
  })

  it('Should render a title "Counter".', () => {
    const title = wrapper.find('h1')

    expect(title.length).to.equal(1)
    expect(title.text()).to.equal('Counter')
  })

  it('Should initialize with 0.', () => {
    const counter = wrapper.find('div.counter')

    expect(counter.length).to.equal(1)
    expect(counter.text()).to.equal('0')
  })

  it('Should render 2 buttons.', () => {
    const buttons = wrapper.find('button')

    expect(buttons.length).to.equal(2)
  })

  it('Should render an Increment button.', () => {
    const incrementButton = wrapper.find('button').filterWhere(btn => btn.text() === 'Increment')

    expect(incrementButton.length).to.equal(1)
  })

  it('Should render a Double button.', () => {
    const doubleButton = wrapper.find('button').filterWhere(btn => btn.text() === 'Double')

    expect(doubleButton.length).to.equal(1)
  })

  it('Clicking Increment button should increment counter by 1.', () => {
    const incrementButton = wrapper.find('button').filterWhere(btn => btn.text() === 'Increment')
    const counterBefore = wrapper.find('div.counter')

    expect(counterBefore.text()).to.equal('0')

    incrementButton.simulate('click')
    const counterAfter = wrapper.find('div.counter')

    expect(counterAfter.text()).to.equal('1')
  })

  it('Clicking Double button should double counter.', () => {
    wrapper.setState({ counter: 2 })
    const doubleButton = wrapper.find('button').filterWhere(btn => btn.text() === 'Double')
    const counterBefore = wrapper.find('div.counter')

    expect(counterBefore.text()).to.equal('2')

    doubleButton.simulate('click')
    const counterAfter = wrapper.find('div.counter')

    expect(counterAfter.text()).to.equal('4')
  })
})
