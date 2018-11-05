import sinon from 'sinon'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiEnzyme from 'chai-enzyme'
import mockCssModules from 'mock-css-modules'
import { jsdom } from 'jsdom'

// Mock Css files to be able to test for classes using css-modules
// Mock binary imports to avoid errors thrown when imported in files
mockCssModules.register(['.scss', '.png'])

// Setting up Sinon and Chai
chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiEnzyme())

global.chai = chai
global.sinon = sinon
global.expect = chai.expect
global.should = chai.should()

// Setting up JsDOM
global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property]
  }
})
global.navigator = {
  userAgent: 'node.js',
}
